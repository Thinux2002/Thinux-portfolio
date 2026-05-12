import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, slideIn, fadeIn } from "../utils/motion";

import GitHubCalendar from "react-github-calendar";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: "rgba(255, 255, 255, 0.03)", 
      color: "#fff",
      boxShadow: "none",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      borderRadius: "1.5rem"
    }}
    contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.05)" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[20px] font-bold">
        {experience.title}
      </h3>
      <p
        className="text-orange-400 text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points && experience.points.map((point, index) => (
        point && <li key={`experience-point-${index}`} className="text-secondary text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

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

      <div className="mt-10 flex flex-col">
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.05)">
          {sortedExperiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div 
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="mt-20"
      >
        <div className="glass-card p-10 flex flex-col items-center justify-center">
          <div className="text-center mb-10">
            <h3 className="text-[28px] font-bold text-white mb-2">
              Github Contributions
            </h3>
            <p className="text-orange-500 font-mono tracking-[3px] uppercase text-sm">
              Steady Growth • 2024-2026
            </p>
          </div>
          
          <div className="w-full overflow-x-auto flex justify-center py-4">
            <GitHubCalendar
              username="Thinux2002"
              colorScheme="dark"
              theme={{
                light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
