// components
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


// Experience data
const experienceData = [
  {
    company: 'Apps Technologies',
    position: 'Software Engineer Intern',
    period: 'October 2025 - Present',
  },
  {
    company: 'Colombo Stock Exchange',
    position: 'IT Operator',
    period: 'March 2025 - September 2025',
  },
  {
    company: 'IBEXEND',
    position: 'Software Engineer Intern',
    period: 'March 2025 - September 2025',
  },
];

const Experience = () => {
  return (
    <div className="bg-primary/30 h-screen flex items-center overflow-hidden relative">
      <Circles />
      <div className="container mx-auto px-4 h-full flex items-center py-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-8 md:mb-12"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <motion.h2
              className="h2"
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              My Work <span className="text-accent">Experience</span>
            </motion.h2>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="w-full relative"
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-3 md:space-y-4">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  variants={fadeIn('up', 0.2 * (index + 1))}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 top-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full border-2 md:border-4 border-primary transform md:-translate-x-1/2 z-10 flex items-center justify-center shadow-lg shadow-accent/50">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[45%] ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-5 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:bg-white/10 group">
                      {/* Company */}
                      <h3 className="text-lg md:text-xl font-semibold mb-1.5 text-white group-hover:text-accent transition-colors duration-300">
                        {exp.company}
                      </h3>
                      
                      {/* Position */}
                      <h4 className="text-base md:text-lg text-accent mb-2 font-medium">
                        {exp.position}
                      </h4>

                      {/* Period */}
                      <div className="text-xs md:text-sm text-white/60 font-light tracking-wider">
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Experience;
