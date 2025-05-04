import IconButton from "../atoms/IconButton"
import LinkedInIcon from '@assets/linkedin.svg?react';

interface HeaderButtonContainerProps {

}

const HeaderButtonContainer: React.FC<HeaderButtonContainerProps> = ({ }) => {
  return (
    <div>
      <IconButton className="w-fit h-fit rounded-full">
        <LinkedInIcon className="w-6 h-6"/>
      </IconButton>
    </div>
  )
}

export default HeaderButtonContainer