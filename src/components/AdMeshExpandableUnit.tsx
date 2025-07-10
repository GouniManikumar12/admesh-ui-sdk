import React, { useState } from 'react';
import type { AdMeshRecommendation, AdMeshTheme } from '../types';
import { AdMeshLinkTracker } from './AdMeshLinkTracker';
import {
  getInlineDisclosure,
  getInlineTooltip
} from '../utils/disclosureUtils';

export interface AdMeshExpandableUnitProps {
  /** Product recommendation data */
  recommendation: AdMeshRecommendation;
  /** Theme configuration */
  theme?: AdMeshTheme;
  /** Custom CSS class name */
  className?: string;
  /** Callback when the ad is clicked */
  onClick?: (adId: string, admeshLink: string) => void;
  /** Show "powered by AdMesh" branding */
  showPoweredBy?: boolean;
  /** Initial expanded state */
  initialExpanded?: boolean;
  /** Custom sections to display */
  sections?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  /** Custom call-to-action text */
  ctaText?: string;
  /** Show collapse/expand functionality */
  collapsible?: boolean;
}

/**
 * AdMeshExpandableUnit - A comprehensive ad unit with expandable sections
 * 
 * Similar to the Temporal ad format, this component displays:
 * - Header with product name and sponsor info
 * - Multiple expandable sections with descriptions
 * - Primary call-to-action button
 * - Optional powered by branding
 */
export const AdMeshExpandableUnit: React.FC<AdMeshExpandableUnitProps> = ({
  recommendation,
  theme = { mode: 'light' },
  className = '',
  onClick,
  showPoweredBy = true,
  initialExpanded = false,
  sections,
  ctaText,
  collapsible = true
}) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  const handleClick = () => {
    onClick?.(recommendation.ad_id, recommendation.admesh_link);
  };

  const handleToggleExpand = () => {
    if (collapsible) {
      setIsExpanded(!isExpanded);
    }
  };

  // Use feature sections from API if available, otherwise use default sections
  const apiFeatureSections = recommendation.feature_sections || [];

  const defaultSections = [
    {
      title: 'Documentation',
      description: `Learn more about ${recommendation.recommendation_title || recommendation.title}. Start exploring the features and capabilities.`,
      icon: '◆'
    },
    {
      title: 'Talk To An Expert',
      description: `Ready to learn more about ${recommendation.recommendation_title || recommendation.title}? Reach out to a platform specialist for personalized guidance.`,
      icon: '◉'
    },
    {
      title: `${recommendation.recommendation_title || recommendation.title} Features`,
      description: recommendation.recommendation_description || recommendation.description || `${recommendation.recommendation_title || recommendation.title} offers comprehensive solutions for your needs. Discover the full potential.`,
      icon: '▲'
    },
    {
      title: 'How it Works',
      description: `Learn how to get started with ${recommendation.recommendation_title || recommendation.title}. Begin your journey today.`,
      icon: '●'
    }
  ];

  // Get compliant labels and disclosures
  const inlineDisclosure = getInlineDisclosure(recommendation, false);
  const inlineTooltip = getInlineTooltip();

  // Prioritize: custom sections > API feature sections > default sections
  const displaySections = sections || (apiFeatureSections.length > 0 ? apiFeatureSections : defaultSections);
  const displayCtaText = ctaText || `Try ${recommendation.recommendation_title || recommendation.title}`;

  // Clean, professional color scheme with customization support
  const colors = {
    background: theme.backgroundColor || (theme.mode === 'dark' ? '#1f2937' : '#ffffff'),
    surface: theme.surfaceColor || (theme.mode === 'dark' ? '#374151' : '#f9fafb'),
    border: theme.borderColor || (theme.mode === 'dark' ? '#4b5563' : '#e5e7eb'),
    text: theme.textColor || (theme.mode === 'dark' ? '#f9fafb' : '#111827'),
    textSecondary: theme.textSecondaryColor || (theme.mode === 'dark' ? '#9ca3af' : '#6b7280'),
    accent: theme.accentColor || theme.primaryColor || '#3b82f6',
    secondary: theme.secondaryColor || '#10b981',
    // Remove excessive gradients, use clean solid colors or subtle gradients
    headerBg: theme.gradients?.primary || (theme.mode === 'dark' ? '#374151' : '#f8fafc'),
    sectionBg: theme.gradients?.secondary || (theme.mode === 'dark' ? '#4b5563' : '#ffffff')
  };

  // Get custom styles if provided
  const customStyles = theme.disableDefaultStyles ? {} : {
    fontFamily: theme.fontFamily || '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    borderRadius: theme.borderRadius || '12px',
    border: `1px solid ${colors.border}`,
    background: colors.background,
    overflow: 'hidden',
    maxWidth: '420px',
    boxShadow: theme.shadows?.medium || (theme.mode === 'dark'
      ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'),
    position: 'relative' as const,
    transition: 'all 0.2s ease'
  };

  return (
    <div
      className={`admesh-expandable-unit ${className}`}
      style={{
        ...customStyles,
        ...theme.components?.expandableUnit
      }}
      data-admesh-theme={theme.mode}
    >
      {/* Header */}
      <div
        style={{
          background: colors.headerBg,
          padding: '20px',
          borderBottom: isExpanded || !collapsible ? `1px solid ${colors.border}` : 'none',
          position: 'relative',
          transition: 'all 0.2s ease'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, minWidth: 0 }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: theme.borderRadius || '8px',
                background: colors.accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: theme.fontSize?.base || '16px',
                fontWeight: '600',
                boxShadow: theme.shadows?.small || '0 2px 4px rgba(0, 0, 0, 0.1)',
                border: `1px solid ${colors.border}`
              }}
            >
              {(recommendation.recommendation_title || recommendation.title).charAt(0).toUpperCase()}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: '18px',
                  fontWeight: '600',
                  color: colors.text,
                  lineHeight: '1.4',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {recommendation.recommendation_title || recommendation.title}
              </h3>
              <p
                style={{
                  margin: '8px 0 0 0',
                  fontSize: '13px',
                  color: colors.textSecondary,
                  fontWeight: '400',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
                title={inlineTooltip}
              >
                {inlineDisclosure} • {new URL(recommendation.url || recommendation.admesh_link).hostname}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* CTA Button when collapsed */}
            {!isExpanded && collapsible && (
              <AdMeshLinkTracker
                adId={recommendation.ad_id}
                admeshLink={recommendation.admesh_link}
                productId={recommendation.product_id}
                onClick={handleClick}
                trackingData={{
                  title: recommendation.recommendation_title || recommendation.title,
                  component: 'expandable_unit',
                  expanded: false,
                  location: 'header'
                }}
              >
                <button
                  style={{
                    padding: theme.spacing?.small ? `${theme.spacing.small} ${theme.spacing.medium || '12px'}` : '6px 12px',
                    backgroundColor: colors.accent,
                    color: 'white',
                    border: 'none',
                    borderRadius: theme.borderRadius || '6px',
                    fontSize: theme.fontSize?.small || '12px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: theme.shadows?.small || '0 1px 3px rgba(0, 0, 0, 0.1)',
                    whiteSpace: 'nowrap',
                    ...theme.components?.button
                  }}
                  onMouseOver={(e) => {
                    if (!theme.disableDefaultStyles) {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = theme.shadows?.medium || '0 2px 6px rgba(0, 0, 0, 0.15)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!theme.disableDefaultStyles) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = theme.shadows?.small || '0 1px 3px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                >
                  {displayCtaText}
                </button>
              </AdMeshLinkTracker>
            )}

            {/* Modern Expand/Collapse button */}
            {collapsible && (
              <button
                onClick={handleToggleExpand}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  background: theme.mode === 'dark' ? '#374151' : '#f3f4f6',
                  border: `1px solid ${theme.mode === 'dark' ? '#4b5563' : '#d1d5db'}`,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  color: theme.accentColor || '#2563eb',
                  fontSize: '12px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = theme.mode === 'dark' ? '#4b5563' : '#e5e7eb';
                  e.currentTarget.style.borderColor = theme.accentColor || '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = theme.mode === 'dark' ? '#374151' : '#f3f4f6';
                  e.currentTarget.style.borderColor = theme.mode === 'dark' ? '#4b5563' : '#d1d5db';
                }}
                aria-label={isExpanded ? 'Show less details' : 'Show more details'}
              >
                <span>{isExpanded ? 'Less Details' : 'More Details'}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {isExpanded ? (
                    // Minus icon for collapse
                    <path d="M5 12h14" />
                  ) : (
                    // Info icon for expand
                    <>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </>
                  )}
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      {(isExpanded || !collapsible) && (
        <div style={{ padding: '0' }}>
          {/* Sections */}
          {displaySections.map((section, index) => (
            <div
              key={index}
              style={{
                padding: '24px',
                backgroundColor: index % 2 === 0 ? colors.background : colors.sectionBg,
                borderBottom: index < displaySections.length - 1 ? `1px solid ${colors.border}` : 'none'
              }}
            >
              <h4
                style={{
                  margin: '0 0 12px 0',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: colors.text,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                {section.icon && <span>{section.icon}</span>}
                {section.title}
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: '14px',
                  color: colors.textSecondary,
                  lineHeight: '1.6'
                }}
              >
                {section.description}
              </p>
            </div>
          ))}

          {/* CTA Button - only show when expanded or when not collapsible */}
          {(isExpanded || !collapsible) && (
            <div style={{ padding: '24px', borderTop: `1px solid ${colors.border}`, backgroundColor: colors.background }}>
              <AdMeshLinkTracker
                adId={recommendation.ad_id}
                admeshLink={recommendation.admesh_link}
                productId={recommendation.product_id}
                onClick={handleClick}
                trackingData={{
                  title: recommendation.title,
                  component: 'expandable_unit',
                  expanded: isExpanded,
                  location: 'footer'
                }}
              >
                <button
                  style={{
                    width: '100%',
                    padding: '14px 28px',
                    background: colors.accent,
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
                  }}
                >
                  {displayCtaText}
                </button>
              </AdMeshLinkTracker>
            </div>
          )}

          {/* Powered by AdMesh */}
          {showPoweredBy && (
            <div
              style={{
                padding: '8px 16px',
                borderTop: `1px solid ${colors.border}`,
                backgroundColor: colors.headerBg
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  color: colors.textSecondary,
                  textAlign: 'center' as const
                }}
              >
                powered by <strong style={{ color: colors.text }}>AdMesh</strong>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdMeshExpandableUnit;
