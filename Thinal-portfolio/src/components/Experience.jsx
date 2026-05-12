import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import GitHubCalendar from "react-github-calendar";

const ExperienceCard = ({ experience, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between mb-12 md:mb-24 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Central Dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(239,123,69,0.8)] z-10" />
      
      {/* Content */}
      <motion.div
        variants={fadeIn(isEven ? "left" : "right", "spring", index * 0.4, 0.75)}
        className="w-full md:w-[44%] ml-8 md:ml-0"
      >
        <div className="glass-card p-6 md:p-8 hover:border-orange-500/30 transition-all duration-500 group">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-500">
              <img 
                src={experience.icon} 
                alt={experience.company_name} 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight">{experience.title}</h3>
              <p className="text-orange-500 font-semibold tracking-wide uppercase text-sm mt-1">{experience.company_name}</p>
            </div>
          </div>

          <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
             <p className="text-orange-500 text-[11px] font-mono uppercase tracking-widest font-bold">
               {experience.date}
             </p>
          </div>

          <ul className="space-y-4">
            {experience.points && experience.points.map((point, idx) => (
              point && (
                <li key={`exp-point-${idx}`} className="text-secondary text-[14px] md:text-[15px] leading-relaxed flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50 mt-2 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              )
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Placeholder for desktop layout */}
      <div className="hidden md:block w-[44%]" />
    </div>
  );
};

const Experience = () => {
  const sortedExperiences = experiences.sort((a, b) => {
    const startDateA = new Date(a.startDate || a.StartDate);
    const startDateB = new Date(b.startDate || b.StartDate);
    return startDateB - startDateA;
  });

  return (
    <>
      <div className="section-heading-container">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My professional journey</p>
          <h2 className={styles.sectionHeadText}>
            Work <span className="orange-gradient-text">Experience</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative mt-20 px-4 md:px-0">
        {/* Vertical Line */}
        <div className="absolute left-[5.5px] md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-orange-500 via-white/10 to-transparent opacity-20" />
        
        <div className="flex flex-col">
          {sortedExperiences.map((experience, index) => (
            <ExperienceCard key={`exp-${index}`} index={index} experience={experience} />
          ))}
        </div>
      </div>

    </>
  );
};

export default SectionWrapper(Experience, "work");
