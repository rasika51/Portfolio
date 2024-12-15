// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";

// service data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];


//  components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';


const Services = () => {
  return( 
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8 '>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <h2 className='h2 xl:mt-8'>
              My services <span className='text-accent'>.</span>
            </h2>
            <p className='mb-4 max-w-[400px] mx-auto lg:mx-0 '>
              jjjjjjjjjjj jjjjjjjjjjj kkkkkkkkk i yy u u u  tttttttttttttt rrrrrr rrrr rrrr r r rr rrrrrrrrrrrr     rr rrrrrrrrr rrrrrfff f f  fffffffff fffffffff    ffffffffff ffffffff fffffffffff ffffffff
            </p>
          </div>

          {/* slider */}
          <ServiceSlider />
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
