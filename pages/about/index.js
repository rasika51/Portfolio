import React, { useState } from "react";

// about data
export const aboutData = [
  {
    title: "University",
    info: [
      {
        title: "Sabaragamuwa University of Sri Lanka",
      },
      {
        title: "Bsc (Hons) in Software Engineering",
      },
      {
        title: "Current GPA: ",
        infoText: (
          <strong style={{ color: "#F13024", fontSize: "1.5rem" }}>3.7783</strong>
        ),
      },
      {
        title: "Timeline : 2021 - present",
      },
    ],
  },
  {
    title: "College",
    info: [
      {
        title: "G.C.E. A/L Examination in Physical Science Stream",
      },
      {
        title: "Debarawewa Central College",
      },
      {
        title: "Timeline: 2019",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[470px]"
      >
        <Avatar />
      </motion.div> */}

      <div className="container mx-auto h-full flex flex-col justify-center items-center xl:flex-row gap-x-6 ">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2
            className="h2"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Exploring My<span className="text-accent"> Background </span>
          </motion.h2>

          <motion.p
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            As a Software Engineering undergraduate, I am passionate about
            creating innovative software solutions that can drive real-world
            impact. My goal is to further develop my skills through an
            internship, where I can contribute to impactful projects, learn
            from industry professionals, and continue growing as a software
            engineer.
          </motion.p>

          {/* counters */}
          <motion.div
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl  text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} /> %
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Self-Motivation
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl  text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} /> %
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Problem Solving
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl  text-accent mb-2">
                  <CountUp start={0} end={100} duration={5} /> %
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Time Management
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl  text-accent mb-2">
                  <CountUp start={0} end={80} duration={5} /> %
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Communication Skill
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx:auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex} // key prop added here
                className={`cursor-pointer capitalize xl:text-lg relative items-center after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${
                  index === itemIndex
                    ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    : ""
                }`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="bg-pink-400/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div>{item.infoText}</div> {/* GPA text here */}
                <div className="md:flex"></div>
                <div>{item.stage}</div>
              </div>
            ))}

            {/* Add the button below the college section */}
            {index === 0 && ( // Ensure this button only shows under the "College" section
            <a
            href="/mycv1.pdf" // Link to your CV in the public folder
            download="Rasika-Wedaarachchi-Software_Engineer_Intern-cv" // Sets the downloaded file name
            className="mt-4 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg transform transition-transform duration-300 hover:scale-105"
          >
            DownloaCV
          </a>
           
            
            
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
