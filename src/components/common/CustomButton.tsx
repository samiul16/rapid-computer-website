// components/CustomButton.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // if you’re using shadcn utils

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
}

const CustomButton = ({
  text,
  onClick,
  icon,
  className,
}: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-gradient-to-br from-[#041A65] to-blue-700 text-white text-xl font-bold px-10 py-4 rounded-full shadow flex items-center gap-2 justify-center cursor-pointer",
        className
      )}
    >
      {icon && <span className="text-2xl">{icon}</span>}
      {text}
    </button>
  );
};

export default CustomButton;
