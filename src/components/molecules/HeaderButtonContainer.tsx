import { useState } from 'react';
import IconButton from "../atoms/IconButton";
import LinkedInIcon from '@assets/linkedin.svg?react';
import GithubIcon from '@assets/github.svg?react';
import LanguageIcon from '@assets/language.svg?react';
import { useTranslation } from 'react-i18next';

const HeaderButtonContainer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLanguageClick = () => {
    setShowDropdown(prev => !prev);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    handleLanguageClick();
  };

  const GITHUB = "https://github.com/jkapa0417";
  const LINKEDIN = "https://www.linkedin.com/in/jun-ki-ahn-ab77481a1/";

  return (
    <div className="relative flex gap-4"> {/* Added relative positioning here */}
      <IconButton
        className="w-fit h-fit rounded-full bg-white hover:bg-gray-100 active:bg-gray-300"
        onClick={handleLanguageClick}
      >
        <LanguageIcon className="w-6 h-6" />
      </IconButton>
      {showDropdown && (
        <div className="absolute right-28 top-9 mt-2 bg-white text-black shadow-md rounded-md z-10 w-full max-w-[100px] flex flex-col justify-center items-center">
          <button
            className="block px-4 py-2 text-center w-full hover:bg-[#8BE78B] active:bg-[#07B53B] cursor-pointer"
            onClick={() => changeLanguage('ko')}
          >
            {t('korean')}
          </button>
          <button
            className="block px-4 py-2 text-center w-full hover:bg-[#8BE78B] active:bg-[#07B53B] cursor-pointer"
            onClick={() => changeLanguage('en')}
          >
            {t('english')}
          </button>
        </div>
      )}
      <IconButton
        className="w-fit h-fit rounded-full bg-white hover:bg-gray-100 active:bg-gray-300"
        onClick={() => window.open(GITHUB, "_blank")}
      >
        <GithubIcon className="w-6 h-6" />
      </IconButton>

      <IconButton
        className="w-fit h-fit rounded-full bg-white hover:bg-gray-100 active:bg-gray-300"
        onClick={() => window.open(LINKEDIN, "_blank")}
      >
        <LinkedInIcon className="w-6 h-6" />
      </IconButton>
    </div>
  );
};

export default HeaderButtonContainer;