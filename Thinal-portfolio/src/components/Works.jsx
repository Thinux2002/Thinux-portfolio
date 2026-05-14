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
  const isFeatured = index === 0;

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className={isFeatured ? "md:col-span-2 lg:col-span-2" : ""}
    >
      <Tilt
        tiltMaxAngleX={isFeatured ? 5 : 10}
        tiltMaxAngleY={isFeatured ? 5 : 10}
        scale={1.01}
        transitionSpeed={450}
        className={`glass-card p-6 h-full flex flex-col group relative overflow-hidden ${isFeatured ? 'flex-col lg:flex-row gap-8' : ''}`}
      >
        {/* Decorative corner glow */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-orange-500/10 blur-2xl rounded-full group-hover:bg-orange-500/20 transition-all duration-500" />
        
        <div className={`${isFeatured ? 'lg:w-1/2' : 'w-full'} project-img-container rounded-2xl overflow-hidden shadow-2xl`}>
          <img
            src={image}
            alt={name}
            className="project-img object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="project-overlay bg-black/40 backdrop-blur-[2px]">
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-bold transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 hover:bg-orange-500 hover:text-white"
            >
              <i className="fa-brands fa-github text-xl"></i>
              <span>View Source</span>
            </button>
          </div>
        </div>

        <div className={`mt-6 flex flex-col flex-grow ${isFeatured ? 'lg:mt-0 lg:justify-center lg:py-4' : ''}`}>
          <div className="flex justify-between items-start mb-4">
             <div>
                <h3 className="text-white font-bold text-[24px] group-hover:text-orange-500 transition-colors duration-300">
                  {name}
                </h3>
                {isFeatured && (
                  <span className="text-[10px] uppercase tracking-[3px] font-bold text-orange-500/80 bg-orange-500/10 px-3 py-1 rounded-full mt-2 inline-block">
                    Featured Project
                  </span>
                )}
             </div>
          </div>
          
          <p className="text-secondary text-[16px] leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
            {description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-[11px] px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm font-medium transition-all duration-300 hover:border-orange-500/50 ${tag.color}`}
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
    <div className="relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <div className="section-heading-container mb-16">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Portfolio Showcase</p>
            <h2 className={styles.sectionHeadText}>
              Featured <span className="orange-gradient-text">Projects</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-6 flex flex-col md:flex-row items-end justify-between gap-8"
          >
            <p className="text-secondary text-[18px] max-w-3xl leading-[32px] text-justify">
              Each project represents a unique challenge solved through modern technology and creative design. 
              From AI platforms to autonomous robotics, these works reflect my journey as a Fullstack Developer 
              committed to building high-performance digital solutions.
            </p>
            <div className="flex items-center gap-4 border-l border-white/10 pl-8 hidden md:flex">
               <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-xl">{projects.length}</span>
               </div>
               <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Projects<br/>Completed</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>

        <GitHubActivity />
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
