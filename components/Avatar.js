// next image
import Image from "next/image";



const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">

      <Image 
        src={'/Rasika2.png'} 
        width={700} 
        height={200} 
        alt=" "
        className="translate-z-0 object-contain w-full h-auto"/>
    </div>
  );
};

export default Avatar;