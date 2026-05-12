import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../style";
import { services, interests } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { me } from "../assets";
import { TechStack } from "../components";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="grow">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full red-orange-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="darkgray-gradient rounded-[20px] py-3 px-4 min-h-[50px] flex justify-evenly items-center flex-col">
          <h5 className="text-white text-[14px] md:text-[16px] text-center tracking-wider z-10">
            {title}
          </h5>
          <img src={icon} alt={title} className="w-10 h-10 object-contain mt-2" />
        </div>
      </motion.div>
    </Tilt>
  );
};

const InterestCard = ({ index, title }) => {
  return (
    <Tilt className="grow">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full red-orange-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="darkgray-gradient rounded-[20px] py-3 px-4 min-h-[50px] flex justify-evenly items-center flex-col">
          <h5 className="text-white text-[16px] text-center tracking-wider z-10">
            {title}
          </h5>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          About <span className="text-[#ff2f00]">Me</span>
        </h2>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">
        <motion.div variants={fadeIn("right", "spring", 0.2, 0.75)}>
          <img
            src={me}
            alt="Thinal"
            className="w-full max-w-[450px] mx-auto rounded-[20px] object-cover"
          />
        </motion.div>
        

        <motion.div variants={fadeIn("left", "spring", 0.2, 0.75)}>
          
          <p className="text-secondary text-xl mb-6  max-w-2xl leading-[28px] text-justify">
            I am a Software Engineer with hands-on experience in MERN stack,
            Java, and .NET development. I focus on building scalable,
            efficient, and user-friendly web applications. I enjoy solving
            real-world problems through technology and continuously improving my
            skills with modern frameworks like React and Spring Boot.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            
            <a
              href="/cv.pdf"
              className="px-6 py-2 rounded-full border border-white text-white hover:bg-secondary/10 transition-colors duration-300 text-center"
            >
              Download CV
            </a>
          </div>
          <TechStack />
        </motion.div>
      </div>

      <div className="mt-10">
        <h3 className="text-white text-[24px] font-bold mb-4">Services</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-white text-[24px] font-bold mb-4">Interests</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((interest, index) => (
            <InterestCard key={interest.title} index={index} {...interest} />
          ))}
        </div>
      </div>

      {/* <div className="mt-10">
        <TechStack />
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
