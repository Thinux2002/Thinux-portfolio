// Hero.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ParallaxBackground from "./parallaxBackground";
import HeroText from "./HeroText";
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
      {/* Dynamic Background Layers */}
      <ParallaxBackground />

      {/* Main Content Content */}
      <HeroText />

      {/* Profile Status Badge */}
      <ProfileBadge />

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center"
      >
        <div className="w-[28px] h-[48px] rounded-full border-2 border-white/10 flex justify-center p-2 mb-4 backdrop-blur-sm">
           <motion.div 
             animate={{ 
               y: [0, 16, 0],
               opacity: [0.3, 1, 0.3],
               scale: [1, 0.8, 1]
             }}
             transition={{ 
               duration: 2, 
               repeat: Infinity, 
               ease: "easeInOut" 
             }}
             className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(239,123,69,1)]"
           />
        </div>
        <p className="font-mono text-[9px] tracking-[5px] uppercase text-white/30 font-bold ml-1">
          Discovery
        </p>
      </motion.div>

      {/* Bottom Vignette Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-30" />
    </section>
  );
};

export default Hero;
