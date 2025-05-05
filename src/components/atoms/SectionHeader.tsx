import { useUIStore } from "../../stores/stores";
import ProfileImage from "@assets/profile_image.jpg";
interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const { setModalOpen } = useUIStore()
  return (
    <div className='flex gap-4 mt-4'>
      <img
        className="rounded-full w-20 h-20 border-4 border-[#07B53B] cursor-pointer"
        src={ProfileImage}
        alt="Profile of Jun Ki Ahn"
        onClick={() => setModalOpen(true)}
      />
      <h1
        className="text-3xl font-bold mb-6 text-gray-800 w-fit bg-white rounded-md p-6 shadow-md relative w-full max-w-[200px] self-center sm:w-fit md:self-start text-center rounded-br-lg rounded-tl-none rounded-tr-lg rounded-bl-lg"
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionHeader;