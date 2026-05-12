import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useEffect, useState } from "react"; // Import useEffect and useState

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
  isMobile,
}) => {
  const MotionDiv = isMobile ? "div" : motion.div;

  return (
    <>
      <MotionDiv variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#141414] p-5 rounded-2xl xs:w-[360px] flex-grow h-full"
        >
          <div className="w-full h-[200px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="inset-0 flex justify-end items-end mt-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="mt-5">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className=" mt-2 text-secondary text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 items-end">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color} `}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </Tilt>
      </MotionDiv>
    </>
  );
};

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);
  const MotionDiv = isMobile ? "div" : motion.div;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)"); // Adjust the media query as needed

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <MotionDiv variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          My <span className="text-[#ff2f00]">Projects</span>
        </h2>
      </MotionDiv>

      <div className="w-full flex">
        {/* Optional: Add content here if needed */}
      </div>
      {/* <div className='mt-10 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            isMobile={isMobile}
          />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(Works, "works");
