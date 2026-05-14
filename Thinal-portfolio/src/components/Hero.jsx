// Hero.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { socialLinks } from "../constants";
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
      {/* Decorative background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none z-[1]" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-red-600/5 blur-[100px] rounded-full pointer-events-none z-[1]" />

      {/* Dynamic Background Layers */}
      <ParallaxBackground />

      {/* Social Sidebar (Fixed on Desktop) */}
      {!isMobile && (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="fixed left-10 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-center gap-6"
        >
          <div className="w-px h-20 bg-gradient-to-b from-transparent to-white/20" />
          <div className="flex flex-col gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-500"
              >
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 brightness-0 invert" 
                />
                <div className="absolute left-16 px-4 py-2 rounded-xl bg-[#050505] border border-white/10 text-white text-[10px] font-bold uppercase tracking-[3px] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 pointer-events-none whitespace-nowrap shadow-2xl">
                  {social.name}
                </div>
              </a>
            ))}
          </div>
          <div className="w-px h-20 bg-gradient-to-t from-transparent to-white/20" />
        </motion.div>
      )}

      {/* Main Content */}
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
        <div className="w-[30px] h-[52px] rounded-full border-2 border-white/10 flex justify-center p-2 mb-4 backdrop-blur-md bg-white/5">
           <motion.div 
             animate={{ 
               y: [0, 18, 0],
               opacity: [0.4, 1, 0.4],
             }}
             transition={{ 
               duration: 2.5, 
               repeat: Infinity, 
               ease: "easeInOut" 
             }}
             className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(239,123,69,0.8)]"
           />
        </div>
        <p className="font-mono text-[9px] tracking-[6px] uppercase text-white/20 font-bold">
          Discovery
        </p>
      </motion.div>

      {/* Bottom Vignette Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/40 to-transparent z-30" />
    </section>
  );
};

export default Hero;
