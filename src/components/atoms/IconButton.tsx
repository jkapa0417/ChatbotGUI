interface IconButtonProps {
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
}

// Example SVG for LinkedIn icon
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
