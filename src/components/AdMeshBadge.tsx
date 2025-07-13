import React from 'react';
import classNames from 'classnames';
import type { AdMeshBadgeProps, BadgeType } from '../types/index';

// Badge type to variant mapping
const badgeTypeVariants: Record<BadgeType, string> = {
  'Top Match': 'primary',
  'Free Tier': 'success',
  'AI Powered': 'secondary',
  'Popular': 'warning',
  'New': 'primary',
  'Trial Available': 'success'
};

// Badge type to icon mapping (using clean Unicode symbols)
const badgeTypeIcons: Partial<Record<BadgeType, string>> = {
  'Top Match': '★',
  'Free Tier': '◆',
  'AI Powered': '◉',
  'Popular': '▲',
  'New': '●',
  'Trial Available': '◈'
};

export const AdMeshBadge: React.FC<AdMeshBadgeProps> = ({
  type,
  variant,
  size = 'md',
  className,
  style
}) => {
  const effectiveVariant = variant || badgeTypeVariants[type] || 'secondary';
  const icon = badgeTypeIcons[type];

  const badgeClasses = classNames(
    'admesh-component',
    'admesh-badge',
    `admesh-badge--${effectiveVariant}`,
    `admesh-badge--${size}`,
    className
  );

  return (
    <span
      className={badgeClasses}
      style={style}
    >
      {icon && <span className="admesh-badge__icon">{icon}</span>}
      <span className="admesh-badge__text">{type}</span>
    </span>
  );
};

AdMeshBadge.displayName = 'AdMeshBadge';
