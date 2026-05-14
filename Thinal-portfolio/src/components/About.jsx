import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../style";
import { services, interests } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { me } from "../assets";
import { TechStack } from "../components";
import cv from "../utils/Thinalcv.pdf";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      className="w-full"
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
        transitionSpeed={450}
        className="glass-card p-6 h-full flex flex-col items-center justify-center gap-4 text-center border-b-2 border-b-transparent hover:border-b-orange-500"
      >
        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
          <img src={icon} alt={title} className="w-10 h-10 object-contain" />
        </div>
        <h3 className="text-white text-[18px] font-bold tracking-wider">
          {title}
        </h3>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <div className="section-heading-container">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>
            About <span className="orange-gradient-text">Me</span>
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
        <motion.div 
          variants={fadeIn("right", "tween", 0.2, 0.8)}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-[2.5rem] opacity-20 group-hover:opacity-30 blur-2xl transition duration-500" />
          <div className="relative glass-card p-4 rounded-[2rem] overflow-hidden">
            <img
              src={me}
              alt="Thinal"
              className="w-full aspect-square object-cover rounded-[1.5rem]"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeIn("left", "tween", 0.2, 0.8)}>
          <h3 className="text-white text-[28px] font-bold mb-6">
            I'm a <span className="text-orange-500">Software Engineer</span> based in Sri Lanka
          </h3>
          <p className="text-secondary text-[18px] leading-[32px] text-justify mb-8">
            With hands-on experience in the MERN stack, Java, and .NET development, I specialize in crafting scalable, 
            high-performance web and mobile applications. My passion lies in architecting elegant solutions to complex 
            real-world problems, always pushing the boundaries of what's possible with modern frameworks.
          </p>

          <div className="flex flex-wrap gap-6 mb-12">
            <a 
              href={cv} 
              download="Thinal_Dewnayana_CV.pdf"
              className="btn-primary flex items-center gap-2 px-8"
            >
              <span>Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">Let's Talk</a>
          </div>

          <div className="pt-8 border-t border-white/5">
             <p className="text-white/50 text-sm uppercase tracking-[4px] mb-6">My Expertise</p>
             <TechStack />
          </div>
        </motion.div>
      </div>

      {/* <div className="mt-32">
        <div className="flex flex-col mb-12">
          <p className={styles.sectionSubText}>How I can help</p>
          <h3 className="text-white text-[32px] font-bold">Services</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");

