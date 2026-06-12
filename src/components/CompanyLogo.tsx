import { motion } from "motion/react";

interface CompanyLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export default function CompanyLogo({ className = "", size = 48, animated = true }: CompanyLogoProps) {
  // Common animation config
  const pulseTransition = {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  } as const;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} overflow-visible`}
    >
      <defs>
        {/* Colors & Gradients */}
        <linearGradient id="capsuleGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00acc1" />
          <stop offset="100%" stopColor="#006064" />
        </linearGradient>
        <linearGradient id="capsuleGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4dd0e1" />
          <stop offset="100%" stopColor="#00838f" />
        </linearGradient>
        <linearGradient id="dnaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e0f7fa" />
          <stop offset="100%" stopColor="#4dd0e1" />
        </linearGradient>

        <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="dnaGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.3   0 0 0 0 0.9   0 0 0 0 1  0 0 0 0.8 0" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Group to center the logo and scale properly */}
      <g transform="translate(0, 0)">
        
        {/* Animated Background Aura */}
        {animated && (
          <motion.circle
            cx="100"
            cy="100"
            r="70"
            fill="rgba(0, 151, 167, 0.08)"
            animate={{
              scale: [0.92, 1.15, 0.92],
              opacity: [0.4, 0.75, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* ==================== CENTRAL DNA DOUBLE HELIX ==================== */}
        {/* We animate this rising upward and rotating as in the reference */}
        <motion.g
          filter="url(#dnaGlow)"
          animate={
            animated
              ? {
                  y: [10, -5, 10],
                  opacity: [0.85, 1, 0.85],
                }
              : {}
          }
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {/* We generate the twists of the double helix using motion paths */}
          {/* Back Wave (Strand A) */}
          <motion.path
            d="M 100,55 Q 90,65 100,75 T 100,95 T 100,115 T 100,135 T 100,155"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            animate={animated ? { strokeDashoffset: [0, -40] } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            strokeDasharray="10 4"
          />

          {/* DNA Ladder Connecting Bars */}
          {[65, 75, 85, 95, 105, 115, 125, 135, 145].map((yVal, i) => {
            // Calculate a wave phase shift to make bars compress and expand
            const val = i * 0.7;
            return (
              <motion.line
                key={yVal}
                x1={100}
                y1={yVal}
                x2={100}
                y2={yVal}
                stroke="url(#dnaGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                animate={
                  animated
                    ? {
                        x1: [100 - 16 * Math.sin(val), 100 + 16 * Math.sin(val), 100 - 16 * Math.sin(val)],
                        x2: [100 + 16 * Math.sin(val), 100 - 16 * Math.sin(val), 100 + 16 * Math.sin(val)],
                      }
                    : { x1: 85, x2: 115 }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}

          {/* Helix Nodes (Nucleobases) */}
          {[65, 75, 85, 95, 105, 115, 125, 135, 145].map((yVal, i) => {
            const val = i * 0.7;
            return (
              <g key={`node-${yVal}`}>
                {/* Node left */}
                <motion.circle
                  cy={yVal}
                  r="4"
                  fill="#ffffff"
                  stroke="#00e5ff"
                  strokeWidth="1"
                  animate={
                    animated
                      ? {
                          cx: [100 - 16 * Math.sin(val), 100 + 16 * Math.sin(val), 100 - 16 * Math.sin(val)],
                          scale: [1, 1.25, 1],
                        }
                      : { cx: 85 }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {/* Node right */}
                <motion.circle
                  cy={yVal}
                  r="4"
                  fill="#00e5ff"
                  stroke="#ffffff"
                  strokeWidth="1"
                  animate={
                    animated
                      ? {
                          cx: [100 + 16 * Math.sin(val), 100 - 16 * Math.sin(val), 100 + 16 * Math.sin(val)],
                          scale: [1.2, 0.9, 1.2],
                        }
                      : { cx: 115 }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </g>
            );
          })}

          {/* Main Top Helix Embellishment */}
          <circle cx="100" cy="50" r="5" fill="#ffffff" />
          <path d="M 100,50 L 100,55" stroke="#ffffff" strokeWidth="2" />
        </motion.g>

        {/* ==================== LEFT CAPSULE SECONDS ==================== */}
        {/* Translates Left slightly if animated to open up the core */}
        <motion.g
          animate={
            animated
              ? {
                  x: [-12, -22, -12],
                  rotate: [0, -3, 0],
                }
              : { x: -14 }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Half Capsule Base Body Shape */}
          <path
            d="M 90,65 
               C 65,52 35,68 35,98 
               C 35,128 65,148 90,135
               Z"
            fill="url(#capsuleGradLeft)"
            stroke="#00838f"
            strokeWidth="3.5"
            strokeLinejoin="round"
            filter="url(#logoGlow)"
          />

          {/* Innermost Circuit Patterns / Medical Nodes inside Capsule */}
          <g opacity="0.85">
            {/* Horizontal connection tracks */}
            <path d="M 45,95 Q 60,85 75,98" stroke="#00e5ff" strokeWidth="1.5" fill="none" />
            <path d="M 48,110 L 68,115" stroke="#00e5ff" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
            <path d="M 68,115 L 75,108" stroke="#00e5ff" strokeWidth="1.5" fill="none" />

            {/* Neural/Bio-circuit synapses */}
            <circle cx="45" cy="95" r="3.5" fill="#ffffff" stroke="#c2f3f8" strokeWidth="1" />
            <motion.circle
              cx="45"
              cy="95"
              r="6.5"
              stroke="#00e5ff"
              strokeWidth="0.75"
              fill="none"
              animate={animated ? { scale: [1, 2.2, 1], opacity: [0.8, 0, 0.8] } : {}}
              transition={pulseTransition}
            />

            <circle cx="75" cy="98" r="3" fill="#00e5ff" />
            <circle cx="48" cy="110" r="3" fill="#ffffff" stroke="#00b4d8" />
            <circle cx="75" cy="108" r="3" fill="#00e5ff" />
          </g>
        </motion.g>

        {/* ==================== RIGHT CAPSULE SECONDS ==================== */}
        {/* Translates Right slightly if animated to open up the core */}
        <motion.g
          animate={
            animated
              ? {
                  x: [12, 22, 12],
                  rotate: [0, 3, 0],
                }
              : { x: 14 }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Half Capsule Base Body Shape */}
          <path
            d="M 110,65 
               C 135,52 165,68 165,98 
               C 165,128 135,148 110,135
               Z"
            fill="url(#capsuleGradRight)"
            stroke="#0097a7"
            strokeWidth="3.5"
            strokeLinejoin="round"
            filter="url(#logoGlow)"
          />

          {/* Innermost Circuit Patterns / Medical Nodes inside Capsule */}
          <g opacity="0.85">
            {/* Tracks */}
            <path d="M 155,95 Q 140,85 125,98" stroke="#00e5ff" strokeWidth="1.5" fill="none" />
            <path d="M 152,110 L 132,115" stroke="#00e5ff" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
            <path d="M 132,115 L 125,108" stroke="#00e5ff" strokeWidth="1.5" fill="none" />

            {/* Neural/Bio-circuit synapses */}
            <circle cx="155" cy="95" r="3.5" fill="#ffffff" stroke="#c2f3f8" strokeWidth="1" />
            <motion.circle
              cx="155"
              cy="95"
              r="6.5"
              stroke="#00e5ff"
              strokeWidth="0.75"
              fill="none"
              animate={animated ? { scale: [1, 2.2, 1], opacity: [0.8, 0, 0.8] } : {}}
              transition={pulseTransition}
            />

            <circle cx="125" cy="98" r="3" fill="#00e5ff" />
            <circle cx="152" cy="110" r="3" fill="#ffffff" stroke="#00e5ff" />
            <circle cx="125" cy="108" r="3" fill="#00e5ff" />
          </g>
        </motion.g>

      </g>
    </svg>
  );
}
