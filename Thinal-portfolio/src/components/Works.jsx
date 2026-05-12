import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GitHubCalendar from 'react-github-calendar';

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
        className="glass-card p-5 h-full project-card group"
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
          <h3 className="text-white font-bold text-[22px] mb-2 group-hover:text-orange-500 transition-colors">{name}</h3>
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

const GitHubActivity = () => {
  return (
    <motion.div 
      variants={fadeIn("up", "tween", 0.2, 1)}
      className="mt-32 w-full"
    >
      <div className="glass-card p-8 md:p-12 relative overflow-hidden group border-t-2 border-t-orange-500/20">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/5 blur-[100px] rounded-full group-hover:bg-orange-500/10 transition-all duration-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                 <i className="fa-brands fa-github text-xl text-orange-500"></i>
              </div>
              <p className="text-orange-500 font-mono tracking-[4px] uppercase text-xs font-bold">Open Source Contribution</p>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              GitHub <span className="orange-gradient-text">Analytics</span>
            </h3>
            <p className="text-secondary mt-4 max-w-xl leading-relaxed">
              My coding activity and contribution graph across public repositories, showcasing my dedication to consistent development and open-source growth.
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-2">
             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[10px] font-mono uppercase tracking-[2px] text-white/60 font-bold">Live Graph Feed</span>
             </div>
             <a 
               href="https://github.com/Thinux2002" 
               target="_blank" 
               rel="noreferrer"
               className="text-white/40 hover:text-orange-500 text-xs transition-colors mt-2 underline underline-offset-4"
             >
               View Full Profile
             </a>
          </div>
        </div>

        <div className="w-full flex justify-center py-10 px-6 bg-[#050505]/60 rounded-[2rem] border border-white/5 backdrop-blur-md relative z-10 shadow-inner">
          <GitHubCalendar 
            username="Thinux2002"
            colorScheme='dark'
            fontSize={13}
            blockSize={15}
            blockMargin={5}
            theme={{
              light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
          />
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 border-t border-white/5 pt-12">
           <div className="flex flex-col items-center md:items-start">
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-2">Consistency</span>
              <span className="text-white font-bold text-2xl tracking-tighter">Daily Commits</span>
           </div>
           <div className="flex flex-col items-center md:items-start">
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-2">Experience</span>
              <span className="text-white font-bold text-2xl tracking-tighter">3+ Years</span>
           </div>
           <div className="flex flex-col items-center md:items-start">
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-2">Projects</span>
              <span className="text-white font-bold text-2xl tracking-tighter">15+ Repos</span>
           </div>
           <div className="flex flex-col items-center md:items-start">
              <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-2">Focus</span>
              <span className="text-white font-bold text-2xl tracking-tighter">Fullstack Dev</span>
           </div>
        </div>
      </div>
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

      {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div> */}

      <GitHubActivity />
    </>
  );
};

export default SectionWrapper(Works, "projects");
