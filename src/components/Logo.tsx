interface LogoProps {
  color?: string;
  className?: string;
  showWordmark?: boolean;
}

export function LogoIcon({ color = 'currentColor', className = 'w-8 h-8' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-label="Amplifai logo icon">
      {/* Equalizer bars forming an "A" shape with growth/amplitude */}
      <rect x="2" y="28" width="6" height="10" rx="2" fill={color} opacity="0.7" />
      <rect x="11" y="18" width="6" height="20" rx="2" fill={color} opacity="0.85" />
      <rect x="20" y="6" width="6" height="32" rx="2" fill={color} />
      <rect x="29" y="14" width="6" height="24" rx="2" fill={color} opacity="0.85" />
      {/* Arrow tip at top */}
      <path d="M23 2L27 6H19L23 2Z" fill={color} />
    </svg>
  );
}

export function Logo({ color = 'currentColor', className = '', showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoIcon color={color} className="w-9 h-9" />
      {showWordmark && (
        <span
          className="text-xl font-bold tracking-tight font-[family-name:var(--font-display)]"
          style={{ color }}
        >
          Amplifai
        </span>
      )}
    </div>
  );
}
