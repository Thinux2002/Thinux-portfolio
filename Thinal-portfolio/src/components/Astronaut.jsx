// AstronautImage.jsx
// Drop-in replacement for the Three.js Canvas + GLTF astronaut
// Props:
//   isMobile (bool) — passed from Hero to adjust size/position

import { motion } from "framer-motion";

// ── Replace this import with your actual astronaut image ──────────────────────
// import astronautImg from "../assets/astronaut.png";
// Or just use the public folder path: src="/assets/astronaut.png"
// ─────────────────────────────────────────────────────────────────────────────

const AstronautImage = ({ isMobile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: 4 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay: 1.0, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      className="absolute pointer-events-none select-none z-20"
      style={
        isMobile
          ? {
              bottom: "0px",
              right: "-20px",
              width: "72vw",
              maxWidth: "340px",
            }
          : {
              bottom: "-20px",
              right: "2vw",
              width: "42vw",
              maxWidth: "600px",
            }
      }
    >
      {/* Floating + rotating animation — mimics the Float from @react-three/drei */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          filter:
            "drop-shadow(0 0 40px rgba(249,115,22,0.28)) drop-shadow(0 0 80px rgba(45,212,191,0.14))",
        }}
      >
        {/*
          ↓ Replace src with your astronaut image path:
            Public folder  →  src="/assets/astronaut.png"
            Import at top  →  src={astronautImg}
        */}
        <img
          src="/assets/astronaut.png"
          alt="Falling astronaut"
          className="w-full h-auto object-contain"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
};

export default AstronautImage;