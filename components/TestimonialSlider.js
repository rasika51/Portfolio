// Testimonial slider data
export const testimonialData = [
  {
    image: '/icarc.png',
    name: 'ICARC 2024',
    message:
      "Volunteering at ICARC 2024, hosted by the Faculty of Computing at Sabaragamuwa University of Sri Lanka, was an incredible experience. Grateful to contribute to the success of this impactful event, collaborate with brilliant minds, and gain valuable insights.",
  },
  {
    image: '/hack5.png',
    name: 'Hackaholics 5.0',
    message:
      "Thrilled to share that my team and I have been selected in the Top 5 of Hackaholics 5.0! This incredible experience has pushed me to new heights in innovation and teamwork. Grateful for this amazing opportunity and the growth it has brought along the way.",
  },
  {
    image: '/pearlHack.png',
    name: 'PearlHack 2.0',
    message:
      "Throwback to an incredible experience volunteering at Perlhack 2.0, organized by the IEEE WIE Affinity Group of SUSL! It was an amazing opportunity to contribute to such a dynamic event, collaborate with inspiring individuals, and be part of a community.",
  },
  {
    image: '/zone.png',
    name: 'Zone 24x7 Industrial Visit',
    message:
      "Grateful for the amazing opportunity to visit Zone 24/7 Software Company! This experience offered valuable insights and greatly enhanced our understanding of the software industry.",
  },
  {
    image: '/hack6.png',
    name: 'Hackaholics 6.0',
    message:
      "I'm proud to share that our team, 'TrioBlast,' has been selected as finalists in Hackaholics 6.0, organized by the IEEE WIE Student Branch Affinity Group of the University of Colombo School of Computing! This achievement is a testament to our dedication and teamwork.",
  },
  {
    image: '/codegen.png',
    name: 'CodeGen Industrial Visit',
    message:
      "Grateful for the opportunity to visit CodeGen! It was an incredible experience that broadened our knowledge and provided valuable insights into the software industry.",
  },
  {
    image: '/pearlhack1.png',
    name: 'PearlHack 1.0',
    message:
      "Being a member of the WhiteTigers, representing Sabaragamuwa University of Sri Lanka, was an exciting experience. Competing in the finals of Perlhack 1.0 on January 14th 2022.",
  },
];

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination } from 'swiper';

// Icons
import { FaQuoteLeft } from 'react-icons/fa';

// Next.js Image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* Avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* Avatar with hover effect */}
                <div className="relative mb-2 mx-auto group">
                  {/* Image */}
                  <Image
                    src={person.image}
                    width={250}
                    height={200}
                    alt=""
                    // className="transform transition-transform duration-300 group-hover:translate-y-[-10px]"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
                </div>

                {/* Name */}
                <div className="text-lg">{person.name}</div>

                {/* Position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>
            {/* Quote & Message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* Quote icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>

              {/* Message */}
              <div className="s:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
