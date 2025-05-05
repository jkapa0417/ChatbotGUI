interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <h1
      className="text-3xl font-bold mb-6 text-gray-800 underline decoration-wavy decoration-blue-600 w-fit bg-white rounded-md p-6 shadow-md relative w-full max-w-[200px] self-center sm:w-fit md:self-start text-center"
      style={{
        backgroundImage: `
         linear-gradient(#e5e7eb 1px, transparent 1px),
         linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
       `,
        backgroundSize: '20px 20px',
        borderLeft: '2px solid #d1d5db',
      }}
    >
      {title}
    </h1>
  );
};

export default SectionHeader;