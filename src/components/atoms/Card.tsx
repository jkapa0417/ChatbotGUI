interface CardProps {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="w-fit max-w-md bg-white rounded-md p-6 shadow-md relative hover:shadow-xl transition-shadow duration-300"
      style={{
        backgroundImage: `
             linear-gradient(#e5e7eb 1px, transparent 1px),
             linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
           `,
        backgroundSize: '20px 20px',
        borderLeft: '2px solid #d1d5db',
      }}>

      <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-red-400" />

      <div className="absolute left-2 top-4 w-4 h-4 rounded-full bg-gray-200 border border-gray-300" />
      <div className="absolute left-2 top-1/2 w-4 h-4 rounded-full bg-gray-200 border border-gray-300" style={{ transform: 'translateY(-50%)' }} />
      <div className="absolute left-2 bottom-4 w-4 h-4 rounded-full bg-gray-200 border border-gray-300" />

      <div className="absolute top-0 left-0 right-0 h-2 bg-white"
        style={{
          clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)'
        }} />
      {children}
    </div>
  );
};

export default Card;