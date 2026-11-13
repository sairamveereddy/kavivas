"use client";

interface Logo50NinjasProps {
  className?: string;
  size?: "default" | "large" | "small";
}

export default function Logo50Ninjas({ className = "", size = "default" }: Logo50NinjasProps) {
  const sizeClasses = {
    small: "h-7",
    default: "h-9 sm:h-10",
    large: "h-11 sm:h-12",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Bespoke Geometric Ninja Mask / Blade Icon (NO purple circle) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Shuriken / Faceted Shield */}
          <path
            d="M18 2L22.5 13.5L34 18L22.5 22.5L18 34L13.5 22.5L2 18L13.5 13.5L18 2Z"
            fill="url(#ninjaGrad1)"
            opacity="0.9"
          />
          {/* Inner Blade Cutout / Katana Visor */}
          <path
            d="M9 16L18 13L27 16L24 20L18 18L12 20L9 16Z"
            fill="#05070D"
          />
          {/* Glowing Ninja Eye Slit */}
          <path
            d="M11 16.5L18 14.5L25 16.5L23.5 18L18 16.5L12.5 18L11 16.5Z"
            fill="url(#eyeGrad)"
          />
          {/* Dual Katana Slash Accent */}
          <line
            x1="7"
            y1="7"
            x2="29"
            y2="29"
            stroke="url(#slashGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.4"
          />

          <defs>
            <linearGradient id="ninjaGrad1" x1="2" y1="2" x2="34" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A855F7" />
              <stop offset="0.5" stopColor="#6366F1" />
              <stop offset="1" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="eyeGrad" x1="11" y1="14.5" x2="25" y2="18" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F472B6" />
              <stop offset="0.5" stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#38BDF8" />
            </linearGradient>
            <linearGradient id="slashGrad" x1="7" y1="7" x2="29" y2="29" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="1" stopColor="#A855F7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Modern Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-none">
            50<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">NINJAS</span>
          </span>
          <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 tracking-wider">
            STUDIO
          </span>
        </div>
        <span className="text-[10px] font-mono text-zinc-400 tracking-wider mt-0.5">
          50ninjas.kavivas.tech
        </span>
      </div>
    </div>
  );
}
