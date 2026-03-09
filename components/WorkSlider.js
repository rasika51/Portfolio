// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'My-Portfolio',
          path: '/portfolio.png',
          // redirectTo: '/project-2',
        },
        {
          title: 'Assets Management System',
          path: '/hospital.png',
          // redirectTo: '/lhrs-application',
        },
        {
          title: 'Event Management System',
          path: '/event.png',
          // redirectTo: '/project-3',
        },
        {
          title: 'Lecture Hall Allocation',
          path: '/lhas1.png',
          // redirectTo: '/project-4',
        },
      ],
    },
    {
      images: [
        {
          title: 'Vision Path Career Website',
          path: '/mini.png',
          // redirectTo: '/project-2',
        },
        {
          title: 'Laravel-To-Do Application',
          path: '/todo2.png',
          // redirectTo: '/lhrs-application',
        },
        {
          title: 'My-Portfolio',
          path: '/portfolio.png',
          // redirectTo: '/project-2',
        },
        {
          title: 'Tasty Burger Website',
          path: '/food1.png',
          // redirectTo: '/lhrs-application',
        },
      ],
    },
    {
      images: [
        {
          title: 'Lecture Hall Allocation',
          path: '/lhas1.png',
          // redirectTo: '/project-4',
        },
        {
          title: 'Calculator',
          path: '/cal.png',
          // redirectTo: '/project-5',
        },
        {
          title: 'To-Do Application',
          path: '/todo.png',
          // redirectTo: '/project-3',
        },
        {
          title: 'Student Management System',
          path: '/student.png',
          // redirectTo: '/project-2',
        },
      ],
    },
  ],
};

// import necessary modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import { useRouter } from 'next/router'; // Import Next.js router

const WorkSlider = () => {
  const router = useRouter(); // Initialize the router

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      grabCursor={true}
      modules={[Pagination, Navigation]}
      className="h-full w-full "
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-3 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg flex items-center justify-center group"
                    // className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                    onClick={() => router.push(image.redirectTo)} // Redirect on image click
                  >

                    <div className="relative overflow-hidden group">
                    {/* <div className="relative overflow-hidden group"> */}

                      {/* Image with hover scaling effect */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt={image.title}
                        className="transform transition-transform duration-300 group-hover:scale-110"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-60 transition-all duration-700"></div>

                      {/* Title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 ">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* Title part 1 */}
                          <div className="delay-100">{image.title}</div>

                          {/* Title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            {/* PROJECT */}
                          </div>

                          {/* Icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
