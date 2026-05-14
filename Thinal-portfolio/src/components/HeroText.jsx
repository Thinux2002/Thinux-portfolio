// HeroText.jsx
import { motion } from "framer-motion";
import FlipWords from "./FlipWords";

const HeroText = () => {
  const words = [
    "Software Engineer",
    "Full Stack Developer",
    "Mobile App Developer",
    "UI/UX Designer",
    "AI Enthusiast",
  ];

  const slide = (delay) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  });

  return (
    <div className="absolute inset-0 z-[45] flex flex-col justify-center px-6 md:px-20 lg:px-32 select-none pointer-events-none">
      <div className="pointer-events-auto max-w-5xl">
        {/* Subtle line and status */}
        <motion.div
          variants={slide(0.5)}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-12 h-px bg-orange-500" />
          <span className="font-mono text-[10px] tracking-[6px] uppercase text-orange-500 font-bold">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Big Headline */}
        <motion.div
          variants={slide(0.7)}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <h1 className="text-white font-black tracking-tighter leading-[0.85] flex flex-col"
            style={{ fontSize: "clamp(64px, 13vw, 175px)" }}>
            <span className="relative z-10">THINAL</span>
            <span className="relative z-10 text-white/60 group-hover:text-white transition-all duration-700 uppercase">
              DEWNAYANA
            </span>
          </h1>

          {/* Decorative background number */}
          <div className="absolute -top-12 -left-12 opacity-[0.03] text-white font-black text-[250px] pointer-events-none select-none">
            01
          </div>
        </motion.div>

        {/* Role and Typewriter */}
        <motion.div
          variants={slide(0.9)}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row md:items-center gap-4 mt-10"
        >
          <p className="text-white/60 text-xl md:text-3xl font-light tracking-tight">
            Digital Architect &
          </p>
          <div className="bg-white/5 backdrop-blur-md px-6 py-2 rounded-2xl border border-white/10 shadow-xl">
            <FlipWords
              words={words}
              interval={3000}
              className="font-bold text-orange-500 text-xl md:text-3xl tracking-tight"
            />
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={slide(1.1)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-6 mt-14"
        >
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-orange-500 px-12 py-5 font-bold text-black transition-all hover:bg-orange-400 active:scale-95 shadow-[0_15px_30px_rgba(239,123,69,0.3)] hover:shadow-[0_20px_40px_rgba(239,123,69,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-3 uppercase tracking-widest text-[12px]">
              Explore Projects <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </a>

          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full border border-white/20 px-12 py-5 font-bold text-white transition-all hover:bg-white/5 active:scale-95 backdrop-blur-md hover:border-white/40"
          >
            <span className="relative z-10 uppercase tracking-widest text-[12px] flex items-center gap-3">
              Work Together <i className="fa-solid fa-envelope text-white/40 group-hover:text-white transition-colors" />
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;