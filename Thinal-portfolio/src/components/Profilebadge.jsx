import { motion } from "framer-motion";
import meImg from "../assets/me.png";

const ProfileBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      // z-50 — above everything including the astronaut
      className="fixed top-5 right-5 z-50 flex items-center gap-3
                 bg-black/50 backdrop-blur-md border border-white/10
                 rounded-full px-3 py-2 cursor-default"
    >
      {/* Avatar ring */}
      <div
        className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0"
        style={{ boxShadow: "0 0 0 2px rgba(249,115,22,0.8)" }}
      >
        <img
          src={meImg}
          alt="Thinal Dilmith"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Info */}
      <div className="pr-1">
        <p
          className="font-mono text-[9px] tracking-widest uppercase
                      text-orange-400/90 leading-none mb-1"
        >
          Open to work
        </p>
        <p className="font-mono text-[11px] text-white/85 leading-none">
          Thinal Dilmith
        </p>
      </div>

      {/* Pulse dot */}
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-0.5" />
    </motion.div>
  );
};

export default ProfileBadge;
