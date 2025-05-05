interface IconButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, ariaLabel = '', className, children }) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`p-2 hover:bg-gray-200 transition ${className} cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default IconButton;
