// components/ui/button.tsx
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const PrimaryBtn = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "bg-sky-500 hover:bg-sky-400/80 duration-300 text-white rounded-full transition-all focus:outline-none cursor-pointer font-sans shadow hover:text-gray-100",

          {
            "px-3 py-1 text-sm": size === "sm",
            "px-4 py-2 text-base": size === "md",
            "px-6 py-2 text-2xl": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

PrimaryBtn.displayName = "PrimaryBtn";

export { PrimaryBtn };
