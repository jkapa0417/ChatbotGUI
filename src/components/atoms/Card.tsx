interface CardProps {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="w-fit max-w-md bg-[#8BE78B] rounded-md p-6 shadow-md relative hover:shadow-2xl hover:scale-105 transition-shadow duration-300">
      {children}
    </div>
  );
};

export default Card;