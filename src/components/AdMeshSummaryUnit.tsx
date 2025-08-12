import React from 'react';
import type { AdMeshRecommendation, AdMeshTheme } from '../types/index';

export interface AdMeshSummaryUnitProps {
  summaryText: string; // The citation_summary from backend response
  recommendations: AdMeshRecommendation[]; // Full recommendation objects
  theme?: AdMeshTheme;
  className?: string;
  style?: React.CSSProperties;
  onLinkClick?: (recommendation: AdMeshRecommendation) => void;
}

// Process summary text with markdown links [Product Name](admesh_link)
const processSummaryText = (summaryText: string, recommendations: AdMeshRecommendation[]) => {
  // Create lookup map for recommendations by admesh_link
  const linkToRecMap = new Map<string, AdMeshRecommendation>();
  recommendations.forEach(rec => {
    if (rec.admesh_link) {
      linkToRecMap.set(rec.admesh_link, rec);
    }
  });

  // Find markdown links and replace with JSX elements
  const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | React.ReactElement)[] = [];
  let lastIndex = 0;
  let match;
  let linkCounter = 0;

  while ((match = markdownLinkRegex.exec(summaryText)) !== null) {
    const [fullMatch, linkText, url] = match;
    const recommendation = linkToRecMap.get(url);

    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(summaryText.slice(lastIndex, match.index));
    }

    if (recommendation) {
      linkCounter++;
      // Create clickable link element
      parts.push(
        <a
          key={`summary-link-${linkCounter}`}
          href={recommendation.admesh_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-blue-600 dark:decoration-blue-400 hover:decoration-blue-800 dark:hover:decoration-blue-300 transition-colors duration-200 font-medium"
          style={{
            color: '#2563eb', // Force blue color
            textDecoration: 'underline',
            textDecorationColor: '#2563eb',
            textUnderlineOffset: '2px'
          }}
          onClick={(e) => {
            // Log comprehensive click data
            console.log('AdMesh summary link clicked:', {
              adId: recommendation.ad_id,
              productId: recommendation.product_id,
              title: recommendation.title || recommendation.recommendation_title,
              brand: recommendation.brand,
              pricing: recommendation.pricing,
              admeshLink: recommendation.admesh_link,
              source: 'summary'
            });

            // Call external tracker if available
            if (typeof window !== 'undefined' && (window as any).admeshTracker) {
              (window as any).admeshTracker.trackClick({
                adId: recommendation.ad_id,
                productId: recommendation.product_id,
                admeshLink: recommendation.admesh_link,
                source: 'summary'
              });
            }
          }}
        >
          {linkText}
        </a>
      );
    } else {
      // Keep original text if no recommendation found
      console.warn(`[AdMesh Summary] No recommendation found for link: [${linkText}](${url})`);
      parts.push(fullMatch);
    }

    lastIndex = match.index + fullMatch.length;
  }

  // Add remaining text
  if (lastIndex < summaryText.length) {
    parts.push(summaryText.slice(lastIndex));
  }

  return parts;
};

export const AdMeshSummaryUnit: React.FC<AdMeshSummaryUnitProps> = ({
  summaryText,
  recommendations,
  theme,
  className = '',
  style = {},
  onLinkClick
}) => {
  // Validate inputs
  if (!summaryText || !summaryText.trim()) {
    console.warn('[AdMesh Summary] No summary text provided');
    return null;
  }

  if (!recommendations || recommendations.length === 0) {
    console.warn('[AdMesh Summary] No recommendations provided');
    return (
      <div className={`admesh-summary-unit ${className}`} style={style}>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {summaryText}
        </p>
      </div>
    );
  }

  // Process the summary text to create clickable links
  const processedContent = processSummaryText(summaryText, recommendations);

  return (
    <div 
      className={`admesh-summary-unit ${className}`}
      style={{
        fontFamily: theme?.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        ...style
      }}
    >
      {/* Summary Content */}
      <div className="summary-content">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
          {processedContent.map((part, index) => (
            <React.Fragment key={index}>{part}</React.Fragment>
          ))}
        </p>
      </div>

      {/* Disclosure */}
      <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Sponsored • Powered by AdMesh
        </p>
      </div>
    </div>
  );
};

export default AdMeshSummaryUnit;
