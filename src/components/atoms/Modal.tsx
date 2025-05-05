import { useUIStore } from "../../stores/stores";

interface ModalProps {
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { setModalOpen } = useUIStore();
  return (
    <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-2">
        {children}
        <button
          className="mt-2 px-4 py-2 bg-[#07B53B] text-white rounded-lg w-full cursor-pointer"
          onClick={() => setModalOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal