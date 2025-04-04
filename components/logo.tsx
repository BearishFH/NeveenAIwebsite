import type { FC } from "react"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  showText?: boolean
}

const Logo: FC<LogoProps> = ({ className = "", size = "md", showText = true }) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  }

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <svg
          className={`${sizeClasses[size]} w-auto`}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Document base */}
          <path
            d="M8 5C8 3.89543 8.89543 3 10 3H22L32 13V35C32 36.1046 31.1046 37 30 37H10C8.89543 37 8 36.1046 8 35V5Z"
            fill="url(#documentGradient)"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="1"
          />

          {/* Document fold */}
          <path
            d="M22 3L32 13H24C22.8954 13 22 12.1046 22 11V3Z"
            fill="url(#foldGradient)"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="1"
          />

          {/* Neural network overlay */}
          <circle cx="15" cy="18" r="2" fill="#00FFFF" />
          <circle cx="25" cy="18" r="2" fill="#FF00FF" />
          <circle cx="15" cy="28" r="2" fill="#FF00FF" />
          <circle cx="25" cy="28" r="2" fill="#00FFFF" />
          <circle cx="20" cy="23" r="3" fill="white" />

          {/* Connection lines */}
          <path d="M15 20L20 23" stroke="#00FFFF" strokeWidth="1" />
          <path d="M25 20L20 23" stroke="#FF00FF" strokeWidth="1" />
          <path d="M15 26L20 23" stroke="#FF00FF" strokeWidth="1" />
          <path d="M25 26L20 23" stroke="#00FFFF" strokeWidth="1" />

          {/* Pulse effect */}
          <circle
            cx="20"
            cy="23"
            r="6"
            stroke="url(#pulseGradient)"
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.6"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="documentGradient" x1="8" y1="3" x2="32" y2="37" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1A1A1A" />
              <stop offset="1" stopColor="#0F0F0F" />
            </linearGradient>
            <linearGradient id="foldGradient" x1="22" y1="3" x2="32" y2="13" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2A2A2A" />
              <stop offset="1" stopColor="#1A1A1A" />
            </linearGradient>
            <linearGradient id="pulseGradient" x1="14" y1="17" x2="26" y2="29" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF00FF" />
              <stop offset="1" stopColor="#00FFFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="ml-2 flex flex-col">
          <span className="text-lg font-bold tracking-tight text-white">NEVEEN</span>
          <span className="text-[8px] font-medium uppercase tracking-widest text-fuchsia-500">
            INVOICE INTELLIGENCE
          </span>
        </div>
      )}
    </div>
  )
}

export default Logo

