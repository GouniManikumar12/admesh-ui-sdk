import React, { useState, useMemo, useEffect } from 'react';
import classNames from 'classnames';
import type { AdMeshCitationUnitProps, AdMeshRecommendation } from '../types/index';

// Helper functions for text processing
const processTemplateText = (template: string, recs: AdMeshRecommendation[], linkMap: Map<string, AdMeshRecommendation>) => {
  let processedText = template;

  // Replace placeholders like {product1}, {product2}, etc.
  recs.forEach((rec, index) => {
    const linkId = `link_${index + 1}`;
    const placeholder = `{product${index + 1}}`;
    const altPlaceholder = `{recommendation${index + 1}}`;

    linkMap.set(linkId, rec);

    if (processedText.includes(placeholder)) {
      processedText = processedText.replace(placeholder, `{{LINK_${linkId}_${rec.title}}}`);
    } else if (processedText.includes(altPlaceholder)) {
      processedText = processedText.replace(altPlaceholder, `{{LINK_${linkId}_${rec.title}}}`);
    }
  });

  // Handle generic placeholders
  const genericMatches = processedText.match(/\{product\}/g);
  if (genericMatches && recs.length > 0) {
    const linkId = 'link_1';
    linkMap.set(linkId, recs[0]);
    processedText = processedText.replace('{product}', `{{LINK_${linkId}_${recs[0].title}}}`);
  }

  return { text: processedText, linkMap };
};

const processCustomPatterns = (text: string, recs: AdMeshRecommendation[], patterns: any[], linkMap: Map<string, AdMeshRecommendation>) => {
  let processedText = text;

  patterns.forEach((pattern, patternIndex) => {
    const recIndex = Math.min(pattern.recommendationIndex, recs.length - 1);
    const recommendation = recs[recIndex];

    if (recommendation) {
      const linkId = `link_${patternIndex + 1}`;
      linkMap.set(linkId, recommendation);

      const linkText = pattern.linkText || recommendation.title;
      const regex = typeof pattern.pattern === 'string'
        ? new RegExp(pattern.pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
        : pattern.pattern;

      processedText = processedText.replace(regex, (match) => {
        return `${match} {{LINK_${linkId}_${linkText}}}`;
      });
    }
  });

  return { text: processedText, linkMap };
};

const processAppendLinks = (text: string, recs: AdMeshRecommendation[], linkMap: Map<string, AdMeshRecommendation>) => {
  let processedText = text;

  recs.forEach((rec, index) => {
    const linkId = `link_${index + 1}`;
    linkMap.set(linkId, rec);

    if (index === 0) {
      processedText += ` Check out {{LINK_${linkId}_${rec.title}}}`;
    } else if (index === recs.length - 1 && recs.length > 1) {
      processedText += ` and {{LINK_${linkId}_${rec.title}}}`;
    } else {
      processedText += `, {{LINK_${linkId}_${rec.title}}}`;
    }
  });

  return { text: processedText, linkMap };
};

const processAutoLinks = (text: string, recs: AdMeshRecommendation[], linkMap: Map<string, AdMeshRecommendation>) => {
  let processedText = text;

  recs.forEach((recommendation, index) => {
    const linkId = `link_${index + 1}`;
    const title = recommendation.title;

    linkMap.set(linkId, recommendation);

    // Look for exact title matches (case insensitive)
    const titleRegex = new RegExp(`\\b${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');

    if (titleRegex.test(processedText)) {
      processedText = processedText.replace(titleRegex, (match) => {
        return `{{LINK_${linkId}_${match}}}`;
      });
    } else {
      // Try keywords
      const keywords = recommendation.keywords || [];
      let inserted = false;

      for (const keyword of keywords) {
        const keywordRegex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
        if (keywordRegex.test(processedText) && !inserted) {
          processedText = processedText.replace(keywordRegex, (match) => {
            inserted = true;
            return `${match} {{LINK_${linkId}_${title}}}`;
          });
          break;
        }
      }

      if (!inserted) {
        processedText += ` {{LINK_${linkId}_${title}}}`;
      }
    }
  });

  return { text: processedText, linkMap };
};

const processAutoLinksWithMap = (
  text: string,
  recs: AdMeshRecommendation[],
  linkMap: Map<string, AdMeshRecommendation>,
  conversationTextLinks: Map<string, string>
) => {
  let processedText = text;

  // First, process conversationTextLinks (company name -> link mapping)
  conversationTextLinks.forEach((link, companyName) => {
    const companyRegex = new RegExp(`\\b${companyName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    if (companyRegex.test(processedText)) {
      processedText = processedText.replace(companyRegex, (match) => {
        return `{{EXTERNAL_LINK_${match}_${link}}}`;
      });
    }
  });

  // Then process recommendations as before
  recs.forEach((recommendation, index) => {
    const linkId = `link_${index + 1}`;
    const title = recommendation.title;

    linkMap.set(linkId, recommendation);

    // Look for exact title matches (case insensitive)
    const titleRegex = new RegExp(`\\b${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');

    if (titleRegex.test(processedText)) {
      processedText = processedText.replace(titleRegex, (match) => {
        return `{{LINK_${linkId}_${match}}}`;
      });
    } else {
      // Try keywords
      const keywords = recommendation.keywords || [];
      let inserted = false;

      for (const keyword of keywords) {
        const keywordRegex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
        if (keywordRegex.test(processedText) && !inserted) {
          processedText = processedText.replace(keywordRegex, (match) => {
            inserted = true;
            return `${match} {{LINK_${linkId}_${title}}}`;
          });
          break;
        }
      }

      if (!inserted) {
        processedText += ` {{LINK_${linkId}_${title}}}`;
      }
    }
  });

  return { text: processedText, linkMap };
};

export const AdMeshCitationUnit: React.FC<AdMeshCitationUnitProps> = ({
  recommendations,
  conversationTextLinks,
  theme,
  citationStyle = 'numbered',
  onCitationHover,
  className,
  style,
  dynamicTemplate,
  linkInsertionStrategy = 'auto',
  customLinkPatterns,
  onTextUpdate,
  enableRealTimeUpdates = false
}) => {
  const [hoveredRecommendation, setHoveredRecommendation] = useState<AdMeshRecommendation | null>(null);

  // Convert conversationTextLinks to Map if it's a Record
  const linksMap = useMemo(() => {
    if (!conversationTextLinks) return new Map();
    if (conversationTextLinks instanceof Map) return conversationTextLinks;
    return new Map(Object.entries(conversationTextLinks));
  }, [conversationTextLinks]);

  // Dynamic text processing with multiple strategies
  const processedContent = useMemo(() => {
    if (!recommendations.length) {
      return { text: '', linkMap: new Map() };
    }

    const linkMap = new Map();
    const sortedRecommendations = [...recommendations]
      .sort((a, b) => b.intent_match_score - a.intent_match_score);

    // Get conversation text from the first recommendation or use template
    const conversationText = sortedRecommendations[0]?.conversationText || dynamicTemplate || '';

    if (!conversationText) {
      return { text: '', linkMap: new Map() };
    }

    // Strategy 1: Template-based insertion
    if (linkInsertionStrategy === 'template' && dynamicTemplate) {
      return processTemplateText(dynamicTemplate, sortedRecommendations, linkMap);
    }

    // Strategy 2: Custom patterns
    if (linkInsertionStrategy === 'keywords' && customLinkPatterns) {
      return processCustomPatterns(conversationText, sortedRecommendations, customLinkPatterns, linkMap);
    }

    // Strategy 3: Append links at the end
    if (linkInsertionStrategy === 'append') {
      return processAppendLinks(conversationText, sortedRecommendations, linkMap);
    }

    // Strategy 4: Auto-detection with conversationTextLinks
    return processAutoLinksWithMap(conversationText, sortedRecommendations, linkMap, linksMap);
  }, [recommendations, dynamicTemplate, linkInsertionStrategy, customLinkPatterns, linksMap]);



  // Real-time updates effect
  useEffect(() => {
    if (enableRealTimeUpdates && onTextUpdate) {
      const { text } = processedContent;
      // Remove link markers for clean text output
      const cleanText = text.replace(/\{\{LINK_[^}]+\}\}/g, (match) => {
        const linkMatch = match.match(/\{\{LINK_link_\d+_(.+?)\}\}/);
        return linkMatch ? linkMatch[1] : match;
      });
      onTextUpdate(cleanText);
    }
  }, [processedContent, enableRealTimeUpdates, onTextUpdate]);

  // Render text with embedded direct links
  const renderTextWithLinks = () => {
    const { text, linkMap } = processedContent;
    const parts = text.split(/(\{\{(?:LINK_|EXTERNAL_LINK_)[^}]+\}\})/);

    return parts.map((part, index) => {
      // Handle recommendation links
      const linkMatch = part.match(/\{\{LINK_(link_\d+)_(.+?)\}\}/);
      // Handle external links from conversationTextLinks
      const externalLinkMatch = part.match(/\{\{EXTERNAL_LINK_(.+?)_(.+?)\}\}/);

      if (linkMatch) {
        const linkId = linkMatch[1];
        const linkText = linkMatch[2];
        const recommendation = linkMap.get(linkId);

        if (recommendation) {
          return (
            <span
              key={`link-${linkId}-${index}`}
              className="admesh-inline-link"
              onMouseEnter={() => {
                setHoveredRecommendation(recommendation);
                onCitationHover?.(recommendation);
              }}
              onMouseLeave={() => setHoveredRecommendation(null)}
            >
              <a
                href={recommendation.admesh_link || recommendation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-blue-600 dark:decoration-blue-400 hover:decoration-blue-800 dark:hover:decoration-blue-300 transition-colors duration-200"
                style={{
                  textDecorationThickness: '1px',
                  textUnderlineOffset: '2px',
                  color: theme?.accentColor || undefined
                }}
                onClick={(e) => {
                  // Track click
                  if (recommendation.ad_id) {
                    // Optional: Add analytics tracking here
                    console.log('AdMesh link clicked:', {
                      adId: recommendation.ad_id,
                      title: recommendation.title,
                      url: recommendation.admesh_link || recommendation.url
                    });
                  }
                }}
              >
                {linkText}
              </a>
            </span>
          );
        }
      } else if (externalLinkMatch) {
        const companyName = externalLinkMatch[1];
        const externalUrl = externalLinkMatch[2];

        return (
          <a
            key={`external-${index}`}
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 underline decoration-purple-600 dark:decoration-purple-400 hover:decoration-purple-800 dark:hover:decoration-purple-300 transition-colors duration-200"
            style={{
              textDecorationThickness: '1px',
              textUnderlineOffset: '2px',
            }}
            onClick={() => {
              console.log('External link clicked:', {
                companyName,
                url: externalUrl
              });
            }}
          >
            {companyName}
          </a>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };

  const containerClasses = classNames(
    'admesh-citation-unit',
    'rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-slate-900',
    className
  );

  const containerStyle = theme?.accentColor ? {
    '--admesh-primary': theme.accentColor,
  } as React.CSSProperties : undefined;

  return (
    <div
      className={containerClasses}
      style={{
        ...containerStyle,
        fontFamily: theme?.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        // Ensure consistent width: 100% for citation units
        width: theme?.components?.citationUnit?.width || '100%',
        ...theme?.components?.citationUnit,
        ...style
      }}
      data-admesh-theme={theme?.mode}
    >
      {/* Main conversation text with embedded direct links */}
      <div className="admesh-citation-text text-gray-800 dark:text-gray-200 leading-relaxed">
        {renderTextWithLinks()}
      </div>

      {/* Disclosure */}
      <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Sponsored
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          Powered by AdMesh
        </span>
      </div>
    </div>
  );
};
