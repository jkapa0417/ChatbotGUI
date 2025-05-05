import IconButton from "../atoms/IconButton"
import LinkedInIcon from '@assets/linkedin.svg?react';

interface HeaderButtonContainerProps {

}

const HeaderButtonContainer: React.FC<HeaderButtonContainerProps> = ({ }) => {
  const LINKEDIN = "https://www.linkedin.com/in/jun-ki-ahn-ab77481a1/"
  return (
    <div>
      <IconButton className="w-fit h-fit rounded-full bg-white hover:bg-gray-100 active:bg-gray-300" onClick={()=> window.open(LINKEDIN, "__blank")}>
        <LinkedInIcon className="w-6 h-6"/>
      </IconButton>
    </div>
  )
}

export default HeaderButtonContainer