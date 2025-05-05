import { useUIStore } from "../../stores/stores";
import ProfileImage from "@assets/profile_image.jpg";
interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const { setModalOpen } = useUIStore()
  return (
    <div className='flex gap-4 mt-4 mb-8 justify-center sm:justify-start items-center w-full'>
      <img
        className="hidden sm:flex rounded-full w-16 h-16 border-4 border-[#07B53B] cursor-pointer"
        src={ProfileImage}
        alt="Profile of Jun Ki Ahn"
        onClick={() => setModalOpen(true)}
      />
      <h1
        className="flex text-2xl font-bold text-gray-800 w-full sm:w-fit bg-white rounded-md p-6 shadow-md relative w-fit self-center sm:w-fit sm:self-start text-center rounded-br-lg rounded-tl-none rounded-tr-lg rounded-bl-lg max-w-md"
      >
        <p className="text-center sm:text-start w-full">
          {title}
        </p>
      </h1>
    </div>
  );
};

export default SectionHeader;