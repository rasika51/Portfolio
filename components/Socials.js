// links
import Link from "next/link";

// icons
import {
    RiLinkedinBoxFill, 
    RiGithubLine, 
    RiMediumLine,
  } from 'react-icons/ri';

  import { 
    MdOutlineEmail,
    MdMobileScreenShare,
   } from "react-icons/md";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">

      <Link href={'https://www.linkedin.com/in/rasika-wedaarachchi-ba87062a0/?original_referer='}
      className="hover:text-accent transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
      >
        <RiLinkedinBoxFill />
      </Link>

      <Link href={'https://github.com/rasika51'} 
      className="hover:text-accent transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
      >
        <RiGithubLine />
      </Link>

      <Link href="mailto:wedaarachchirasika@gmail.com" 
      className="hover:text-accent transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer">
        <MdOutlineEmail />
      </Link>

      <Link href="tel:0788948818" className="hover:text-accent transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
      >
        <MdMobileScreenShare />
      </Link>

      <Link href={'https://medium.com/@wedaarachchirasika'} className="hover:text-accent transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
      >
        <RiMediumLine />
      </Link> 
      
    </div>
  );
};

export default Socials;
