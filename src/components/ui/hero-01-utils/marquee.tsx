"use client";

import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <>
      <style>
        {`
          @keyframes marquee-anim {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-100% - var(--gap, 1rem)));
            }
          }
 
          @keyframes marquee-vertical-anim {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(calc(-100% - var(--gap, 1rem)));
            }
          }
 
          .animate-marquee-track {
            animation: marquee-anim var(--duration, 40s) linear infinite;
          }
 
          .animate-marquee-vertical-track {
            animation: marquee-vertical-anim var(--duration, 40s) linear infinite;
          }
 
          .animate-reverse-track {
            animation-direction: reverse !important;
          }
 
          .pause-on-hover:hover .animate-marquee-track,
          .pause-on-hover:hover .animate-marquee-vertical-track {
            animation-play-state: paused !important;
          }
        `}
      </style>
      <div
        {...props}
        className={cn(
          "group flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
            "pause-on-hover": pauseOnHover,
          },
          className
        )}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn("flex shrink-0 justify-around gap-(--gap)", {
                "animate-marquee-track flex-row": !vertical,
                "animate-marquee-vertical-track flex-col": vertical,
                "animate-reverse-track": reverse,
              })}
            >
              {children}
            </div>
          ))}
      </div>
    </>
  );
}
