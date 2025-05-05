import HeaderButtonContainer from "../../molecules/HeaderButtonContainer";
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between items-center w-full text-white px-4 py-2 bg-[#07B53B]"
    >
      <div className="flex items-center gap-4">
        <h1 className="font-bold text-2xl">{t('header_title')}</h1>
      </div>
      <HeaderButtonContainer />
      { children }
    </div>
  );
}

export default Header;