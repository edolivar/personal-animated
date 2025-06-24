type magicButtonProps = {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
};
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: magicButtonProps) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full">
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
    bg-[conic-gradient(from_90deg_at_50%_50%,#D8B4FE_0%,#000000_25%,#A78BFA_50%,#000000_75%,#D8B4FE_100%)] 
    dark:bg-[conic-gradient(from_90deg_at_50%_50%,#D8B4FE_0%,#FFFFFF_25%,#A78BFA_50%,#FFFFFF_75%,#D8B4FE_100%)]"
      />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white dark:bg-black px-7 text-sm font-medium text-black dark:text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && <span className="ml-2">{icon}</span>}
        {title}
        {position === "right" && <span className="ml-2">{icon}</span>}
      </span>
    </button>
  );
};

export default MagicButton;
