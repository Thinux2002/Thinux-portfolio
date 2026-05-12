import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)}>
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.02}
        transitionSpeed={450}
        className="glass-card p-5 h-full project-card"
      >
        <div className="project-img-container">
          <img
            src={image}
            alt={name}
            className="project-img"
          />
          <div className="project-overlay">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex justify-center items-center cursor-pointer hover:bg-orange-500 transition-all duration-300"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col flex-grow">
          <h3 className="text-white font-bold text-[22px] mb-2">{name}</h3>
          <p className="text-secondary text-[14px] leading-relaxed line-clamp-3 mb-6">
            {description}
          </p>
          
          <div className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag.name} 
                className={`text-[12px] px-3 py-1 rounded-full bg-white/5 border border-white/5 ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div className="section-heading-container">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My work</p>
          <h2 className={styles.sectionHeadText}>
            Featured <span className="orange-gradient-text">Projects</span>
          </h2>
        </motion.div>
      </div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
