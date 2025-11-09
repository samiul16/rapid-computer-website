"use client";

import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FaPlay } from "react-icons/fa";

interface WatchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

const WatchVideoButton = forwardRef<HTMLButtonElement, WatchButtonProps>(
  ({ className, icon, children = "Watch Video", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center gap-4 cursor-pointer group",
          className
        )}
        {...props}
      >
        {/* Blue circle with white play icon */}
        <div className="relative">
          {/* Outer gray ring */}
          <div className=" md:w-16 md:h-16 rounded-full border-4 border-white/40 flex items-center justify-center">
            {/* Inner blue circle */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-500 rounded-full flex items-center justify-center group-hover:bg-sky-600 transition-colors shadow-lg">
              {icon ?? <FaPlay size={16} className="text-white ml-0.5" />}
            </div>
          </div>
        </div>

        {/* Watch Video text */}
        <span
          className="text-2xl text-white font-bold tracking-wide"
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {children}
        </span>
      </button>
    );
  }
);

WatchVideoButton.displayName = "WatchVideoButton";

export { WatchVideoButton };
