import type { AdMeshRecommendation } from '../types/index';

/**
 * Utility functions for generating compliant disclosure labels and tooltips
 */

export interface DisclosureConfig {
  showTooltips?: boolean;
  compactMode?: boolean;
  customLabels?: {
    partnerRecommendation?: string;
    partnerMatch?: string;
    promotedOption?: string;
    relatedOption?: string;
  };
}

/**
 * Generate appropriate label based on match score and recommendation quality
 */
export const getRecommendationLabel = (
  recommendation: AdMeshRecommendation,
  config: DisclosureConfig = {}
): string => {
  const matchScore = recommendation.intent_match_score || 0;
  const customLabels = config.customLabels || {};

  // High match score (>0.8)
  if (matchScore >= 0.8) {
    return customLabels.partnerRecommendation || 'Sponsored';
  }
  
  // Medium match score (0.6-0.8)
  if (matchScore >= 0.6) {
    return customLabels.partnerMatch || 'Partner Match';
  }
  
  // Lower match score (<0.6)
  if (matchScore >= 0.3) {
    return customLabels.promotedOption || 'Promoted';
  }
  
  // Very low match - related option
  return customLabels.relatedOption || 'Related';
};

/**
 * Generate tooltip text for recommendation labels
 */
export const getLabelTooltip = (
  recommendation: AdMeshRecommendation,
  _label: string
): string => {
  const matchScore = recommendation.intent_match_score || 0;

  if (matchScore >= 0.8) {
    return "This recommendation is from a partner who compensates us when you engage. We've matched it to your needs based on your query.";
  }
  
  if (matchScore >= 0.6) {
    return "Top-rated partner solution matched to your specific requirements. Partner compensates us for qualified referrals.";
  }
  
  if (matchScore >= 0.3) {
    return "This partner solution may be relevant to your needs. The partner compensates us when you take qualifying actions.";
  }
  
  return "This solution is somewhat related to your query. While not a perfect match, it might still be helpful. This partner compensates us for qualified referrals.";
};

/**
 * Generate section-level disclosure text
 */
export const getSectionDisclosure = (
  hasHighMatches: boolean = true,
  isExpanded: boolean = false
): string => {
  if (!hasHighMatches) {
    return "Expanded Results: While these don't perfectly match your query, they're related solutions from our partner network. All partners compensate us for referrals.";
  }
  
  if (isExpanded) {
    return "These curated recommendations are from partners who compensate us for referrals.";
  }
  
  return "Personalized Sponsoreds: All results are from vetted partners who compensate us for qualified matches. We've ranked them based on relevance to your specific needs.";
};

/**
 * Generate inline disclosure text for product cards
 */
export const getInlineDisclosure = (
  recommendation: AdMeshRecommendation,
  compact: boolean = false
): string => {
  const matchScore = recommendation.intent_match_score || 0;

  if (compact) {
    return "Promoted";
  }

  if (matchScore >= 0.8) {
    return "Smart Recommendation";
  }

  if (matchScore >= 0.6) {
    return "Partner Match";
  }

  return "Promoted";
};

/**
 * Generate detailed tooltip for inline disclosures
 */
export const getInlineTooltip = (): string => {
  return "We've partnered with trusted providers to bring you relevant solutions. These partners compensate us for qualified referrals, which helps us keep our service free.";
};

/**
 * Generate badge text without emojis
 */
export const getBadgeText = (badgeType: string): string => {
  const badgeMap: Record<string, string> = {
    'Top Match': 'Top Match',
    'Sponsored': 'Sponsored',
    'Perfect Fit': 'Perfect Fit',
    'Great Match': 'Great Match',
    'Recommended': 'Recommended',
    'Good Fit': 'Good Fit',
    'Featured': 'Featured',
    'Popular Choice': 'Popular Choice',
    'Premium Pick': 'Premium Pick',
    'Free Tier': 'Free Tier',
    'AI Powered': 'AI Powered',
    'Popular': 'Popular',
    'New': 'New',
    'Trial Available': 'Trial Available',
    'Related Option': 'Related Option',
    'Alternative Solution': 'Alternative Solution',
    'Expanded Match': 'Expanded Match'
  };
  
  return badgeMap[badgeType] || badgeType;
};

/**
 * Generate appropriate CTA text
 */
export const getCtaText = (
  recommendation: AdMeshRecommendation,
  context: 'button' | 'link' = 'button'
): string => {
  const productName = recommendation.recommendation_title || recommendation.title;
  
  if (context === 'link') {
    return productName;
  }
  
  // For buttons, use action-oriented text
  if (recommendation.trial_days && recommendation.trial_days > 0) {
    return `Try ${productName}`;
  }

  return `Learn More`;
};

/**
 * Check if recommendations have high match scores
 */
export const hasHighQualityMatches = (recommendations: AdMeshRecommendation[]): boolean => {
  return recommendations.some(rec => (rec.intent_match_score || 0) >= 0.8);
};

/**
 * Generate compliant powered-by text
 */
export const getPoweredByText = (compact: boolean = false): string => {
  if (compact) {
    return "";
  }
  
  return "Recommendations ";
};
