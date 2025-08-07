import React from "react";

interface MagicButtonProps {
  type?: "button" | "submit" | "reset";
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  disabled?: boolean;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  type = "button",
  title,
  icon,
  position,
  handleClick,
  otherClasses = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none transition-all duration-300 md:w-60 md:mt-10 hover:scale-[1.03] hover:shadow-[0_0_20px_#E2CBFF50] ${
        disabled ? "opacity-70 cursor-not-allowed" : ""
      } ${otherClasses}`}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#041C34] gap-2 px-7 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 hover:bg-[#042d3ad0]`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
