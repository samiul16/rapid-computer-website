"use client";

import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FaPlay } from "react-icons/fa";

interface WatchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

const WatchVideoButton = forwardRef<HTMLButtonElement, WatchButtonProps>(
  ({ className, icon, children = "Watch Now", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn("flex items-center gap-4 cursor-pointer", className)}
        {...props}
      >
        {/* Icon with separate background and border */}
        <span className="flex items-center justify-center p-3 rounded-full border-8 border-[#E9F8FF] font-bold text-white bg-[#20B8FB] hover:bg-[#20B8FB]/90 transition-all shadow-md cursor-pointer">
          {icon ?? <FaPlay size={16} />}
        </span>

        {/* Text separate */}
        <span
          className="text-2xl text-white font-extrabold"
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
