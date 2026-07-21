import cn from "clsx";

interface HorizonDividerProps {
  glowColor?: string; // e.g. "from-cyan-500 to-teal-400"
  className?: string;
}

export function HorizonDivider({ 
  className 
}: HorizonDividerProps) {
  return (
    <div className={cn("absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none", className)}>
      <svg 
        viewBox="0 0 1440 160" 
        preserveAspectRatio="none" 
        className="relative block w-full h-[80px] md:h-[140px]"
      >
        <defs>
          {/* Custom linear gradient mirroring your primary cyan/emerald flow */}
          <linearGradient id="horizonGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6,182,212,0.1)" />
            <stop offset="30%" stopColor="rgba(6,182,212,0.8)" />
            <stop offset="50%" stopColor="rgba(52,211,153,1)" />
            <stop offset="70%" stopColor="rgba(6,182,212,0.8)" />
            <stop offset="100%" stopColor="rgba(6,182,212,0.1)" />
          </linearGradient>
        </defs>

        {/* Ambient Back Glow - Creates the fog/atmosphere on the horizon line */}
        <path 
          d="M0,160 Q720,-20 1440,160" 
          fill="none" 
          stroke="url(#horizonGlow)" 
          strokeWidth="12" 
          className="opacity-40 blur-[10px]"
        />
        
        {/* Core Crisp Horizon Line - Razor sharp arc matching your logo */}
        <path 
          d="M0,160 Q720,-20 1440,160" 
          fill="none" 
          stroke="url(#horizonGlow)" 
          strokeWidth="2" 
          className="opacity-90"
        />

        {/* Mask Base Solid - Blocks out the background below cleanly */}
        <path 
          d="M0,160 L0,160 Q720,-20 1440,160 L1440,160 Z" 
          fill="#020817" 
        />
      </svg>
    </div>
  );
}