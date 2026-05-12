// Hero.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ParallaxBackground from "./parallaxBackground";
import HeroText from "./HeroText";
import AstronautImage from "./Astronaut";
import ProfileBadge from "./Profilebadge";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 853 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 853);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative flex items-start justify-center min-h-screen overflow-hidden">

      {/* 1 — Parallax mountain / sky layers */}
      <ParallaxBackground />

      {/* 2 — Name, role typewriter, CTA buttons */}
      <HeroText />

      {/* 3 — Astronaut PNG (replaces Three.js Canvas) */}
      <AstronautImage isMobile={isMobile} />

      {/* 4 — Profile photo badge top-right */}
      <ProfileBadge />

      {/* 5 — Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30
                   flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[4px] uppercase text-white/25">
          scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>

    </section>
  );
};

export default Hero;
