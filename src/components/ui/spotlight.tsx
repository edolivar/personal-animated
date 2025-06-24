import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
  // Animation position props
  startX?: string;
  startY?: string;
  endX?: string;
  endY?: string;
  startScale?: string;
  endScale?: string;
  // Animation timing props (optional)
  duration?: string;
  delay?: string;
  ease?: string;
};

export const Spotlight = ({
  className,
  fill,
  startX = "-72%",
  startY = "-62%",
  endX = "-50%",
  endY = "-40%",
  startScale = "0.5",
  endScale = "1",
  duration = "2s",
  delay = "0.75s",
  ease = "ease",
}: SpotlightProps) => {
  // Create inline styles for CSS variables
  const animationStyles = {
    "--start-x": startX,
    "--start-y": startY,
    "--end-x": endX,
    "--end-y": endY,
    "--start-scale": startScale,
    "--end-scale": endScale,
    "--duration": duration,
    "--delay": delay,
    "--ease": ease,
  } as React.CSSProperties;

  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className,
      )}
      style={animationStyles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "var(--spotlight-fill, white)"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
