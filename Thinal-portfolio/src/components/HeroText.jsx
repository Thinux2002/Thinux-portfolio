// HeroText.jsx
import { motion } from "framer-motion";
import FlipWords from "./FlipWords";

const HeroText = () => {
  const words = [
    "Full Stack Developer",
    "Mobile App Developer",
    "UI/UX Designer",
    "New Innovator",
    "AI Enthusiast",
  ];

  const slide = (delay) => ({
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  });

  return (
    <>
      {/* Left-side gradient scrim — keeps text readable over parallax */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.10) 65%, transparent 80%)",
        }}
      />

      {/* Text block — left-aligned, vertically centred */}
      <div
        className="absolute inset-0 z-30 flex flex-col justify-center
                   px-10 md:px-16 lg:px-24 pb-20 pointer-events-none"
      >
        <div className="pointer-events-auto max-w-xl">

          {/* Tag */}
          <motion.p
            variants={slide(0.4)}
            initial="hidden"
            animate="visible"
            className="font-mono text-[11px] tracking-[5px] uppercase
                       text-orange-400/80 mb-6"
          >
            Portfolio — 2025
          </motion.p>

          {/* THINAL — solid white */}
          <motion.h1
            variants={slide(0.6)}
            initial="hidden"
            animate="visible"
            className="font-black text-white leading-[0.88] tracking-tight"
            style={{
              fontFamily: "'Syne', 'Arial Black', sans-serif",
              fontSize: "clamp(80px, 11vw, 155px)",
            }}
          >
            THINAL
          </motion.h1>

          {/* DILMITH — outlined, with a solid dark fill behind it so it
              doesn't bleed into the mountains unreadably */}
          <motion.div
            variants={slide(0.75)}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {/* Dark fill clone behind outline for legibility */}
            <h1
              aria-hidden="true"
              className="font-black leading-[0.88] tracking-tight select-none
                         absolute inset-0"
              style={{
                fontFamily: "'Syne', 'Arial Black', sans-serif",
                fontSize: "clamp(80px, 11vw, 155px)",
                color: "rgba(0,0,0,0.45)",
                WebkitTextStroke: "0px transparent",
              }}
            >
              DILMITH
            </h1>
            {/* Outlined text on top */}
            <h1
              className="font-black leading-[0.88] tracking-tight relative"
              style={{
                fontFamily: "'Syne', 'Arial Black', sans-serif",
                fontSize: "clamp(80px, 11vw, 155px)",
                WebkitTextStroke: "2.5px rgba(255,255,255,0.65)",
                color: "transparent",
              }}
            >
              DILMITH
            </h1>
          </motion.div>

          {/* Role flip */}
          <motion.div
            variants={slide(0.95)}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-x-2 mt-7"
          >
            <span
              className="text-white/60"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(16px, 2vw, 22px)",
                fontWeight: 400,
              }}
            >
              I&apos;m a
            </span>
            <FlipWords
              words={words}
              interval={2800}
              className="font-bold text-orange-400"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(16px, 2vw, 22px)",
              }}
            />
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={slide(1.15)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 mt-9"
          >
            <button
              className="font-mono text-[11px] tracking-[3px] uppercase
                         px-8 py-4 bg-orange-500 hover:bg-orange-400
                         active:scale-95 text-black font-bold
                         transition-all duration-200 rounded-none"
            >
              View Work
            </button>
            <button
              className="font-mono text-[11px] tracking-[3px] uppercase
                         px-8 py-4 border border-white/30
                         hover:border-orange-400 hover:text-orange-300
                         text-white/60 transition-all duration-200
                         rounded-none backdrop-blur-sm"
            >
              Contact Me
            </button>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default HeroText;