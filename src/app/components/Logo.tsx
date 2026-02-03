import React from 'react';
import clsx from 'clsx';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  collapsed?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', className, collapsed = false }) => {
  // Brand colors
  const primaryColor = variant === 'light' ? '#F59E0B' : '#D97706'; // Amber 500/700
  const secondaryColor = variant === 'light' ? '#FFFFFF' : '#1C1917'; // White / Stone 900
  const accentColor = variant === 'light' ? '#FDE68A' : '#78350F'; // Amber 200 / Amber 900

  return (
    <div className={clsx("flex items-center gap-3 select-none", className)}>
      {/* Logo Mark */}
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Background Circle - Abstract Sun/Moon */}
        <circle cx="20" cy="20" r="20" fill={primaryColor} fillOpacity="0.1" />
        
        {/* Shrine Dome Silhouette */}
        <path 
          d="M10 28H30V28C30 28 30 14 20 14C10 14 10 28 10 28V28Z" 
          fill={primaryColor} 
        />
        
        {/* Dune / Path Line - Cutting through */}
        <path 
          d="M6 32C6 32 12 26 20 30C28 34 34 28 34 28" 
          stroke={secondaryColor} 
          strokeWidth="3" 
          strokeLinecap="round" 
        />
        
        {/* Accent detail - Minaret tip or star */}
        <circle cx="20" cy="11" r="2" fill={secondaryColor} />
      </svg>

      {/* Wordmark */}
      {!collapsed && (
        <div className="flex flex-col justify-center">
          <span className={clsx("font-bold text-lg leading-none tracking-tight font-display", variant === 'light' ? "text-white" : "text-stone-900")}>
            Layyah
          </span>
          <span className={clsx("text-[10px] font-medium uppercase tracking-[0.2em] leading-tight opacity-90", variant === 'light' ? "text-stone-200" : "text-stone-600")}>
            Heritage Walk
          </span>
        </div>
      )}
    </div>
  );
};
