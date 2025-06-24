import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import type { AdMeshCitationUnitProps, AdMeshRecommendation } from '../types/index';
import { AdMeshCitationReference } from './AdMeshCitationReference';
import { AdMeshInlineRecommendation } from './AdMeshInlineRecommendation';

export const AdMeshCitationUnit: React.FC<AdMeshCitationUnitProps> = ({
  recommendations,
  conversationText,
  theme,
  showCitationList = true,
  citationStyle = 'numbered',
  onRecommendationClick,
  onCitationHover,
  className
}) => {
  const [hoveredRecommendation, setHoveredRecommendation] = useState<AdMeshRecommendation | null>(null);

  // Process conversation text to insert citations
  const processedContent = useMemo(() => {
    if (!conversationText || recommendations.length === 0) {
      return { text: conversationText, citationMap: new Map() };
    }

    let processedText = conversationText;
    const citationMap = new Map();
    
    // Sort recommendations by intent match score (highest first)
    const sortedRecommendations = [...recommendations]
      .sort((a, b) => b.intent_match_score - a.intent_match_score);

    // Find mentions of product titles in the text and replace with citations
    sortedRecommendations.forEach((recommendation, index) => {
      const citationNumber = index + 1;
      const title = recommendation.title;
      
      // Create citation reference
      citationMap.set(citationNumber, recommendation);
      
      // Look for exact title matches (case insensitive)
      const titleRegex = new RegExp(`\\b${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      
      // Replace first occurrence with citation
      if (titleRegex.test(processedText)) {
        processedText = processedText.replace(titleRegex, (match) => {
          return `${match}{{CITATION_${citationNumber}}}`;
        });
      } else {
        // If no exact match, try to find a good insertion point
        // Look for related keywords or add at the end of relevant sentences
        const keywords = recommendation.keywords || [];
        let inserted = false;
        
        for (const keyword of keywords) {
          const keywordRegex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
          if (keywordRegex.test(processedText) && !inserted) {
            processedText = processedText.replace(keywordRegex, (match) => {
              inserted = true;
              return `${match}{{CITATION_${citationNumber}}}`;
            });
            break;
          }
        }
        
        // If still no insertion point found, add citation at the end
        if (!inserted) {
          processedText += `{{CITATION_${citationNumber}}}`;
        }
      }
    });

    return { text: processedText, citationMap };
  }, [conversationText, recommendations]);

  // Render text with embedded citations
  const renderTextWithCitations = () => {
    const { text, citationMap } = processedContent;
    const parts = text.split(/(\{\{CITATION_\d+\}\})/);

    return parts.map((part, index) => {
      const citationMatch = part.match(/\{\{CITATION_(\d+)\}\}/);

      if (citationMatch) {
        const citationNumber = parseInt(citationMatch[1]);
        const recommendation = citationMap.get(citationNumber);

        if (recommendation) {
          return (
            <AdMeshCitationReference
              key={`citation-${citationNumber}-${index}`}
              recommendation={recommendation}
              citationNumber={citationNumber}
              citationStyle={citationStyle}
              theme={theme}
              showTooltip={true}
              onClick={onRecommendationClick}
              onHover={(rec) => {
                setHoveredRecommendation(rec);
                onCitationHover?.(rec);
              }}
            />
          );
        }
      }

      return <span key={index}>{part}</span>;
    });
  };

  const containerClasses = classNames(
    'admesh-citation-unit',
    'space-y-4',
    className
  );

  const containerStyle = theme?.accentColor ? {
    '--admesh-primary': theme.accentColor,
  } as React.CSSProperties : undefined;

  return (
    <div
      className={containerClasses}
      style={containerStyle}
      data-admesh-theme={theme?.mode}
    >
      {/* Main conversation text with embedded citations */}
      <div className="admesh-citation-text text-gray-800 dark:text-gray-200 leading-relaxed">
        {renderTextWithCitations()}
      </div>

      {/* Citation list/references */}
      {showCitationList && recommendations.length > 0 && (
        <div className="admesh-citation-list">
          <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              References
            </h4>
            
            <div className="space-y-2">
              {recommendations
                .sort((a, b) => b.intent_match_score - a.intent_match_score)
                .map((recommendation, index) => (
                  <div 
                    key={recommendation.ad_id || index}
                    className={classNames(
                      'flex items-start gap-3 p-2 rounded-lg transition-colors duration-200',
                      {
                        'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800': 
                          hoveredRecommendation?.ad_id === recommendation.ad_id,
                        'hover:bg-gray-50 dark:hover:bg-slate-800/50': 
                          hoveredRecommendation?.ad_id !== recommendation.ad_id
                      }
                    )}
                  >
                    {/* Citation number */}
                    <div className="flex-shrink-0 mt-1">
                      <AdMeshCitationReference
                        recommendation={recommendation}
                        citationNumber={index + 1}
                        citationStyle={citationStyle}
                        theme={theme}
                        showTooltip={false}
                        onClick={onRecommendationClick}
                      />
                    </div>
                    
                    {/* Recommendation details */}
                    <div className="flex-1 min-w-0">
                      <AdMeshInlineRecommendation
                        recommendation={recommendation}
                        theme={theme}
                        compact={true}
                        showReason={false}
                        onClick={onRecommendationClick}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
