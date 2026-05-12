import { motion } from "framer-motion";
import meImg from "../assets/me.png";

const ProfileBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-24 right-6 md:right-12 z-50 flex items-center gap-4 bg-[#050505]/60 backdrop-blur-2xl border border-white/10 rounded-2xl px-5 py-3 cursor-default shadow-[0_20px_50px_rgba(0,0,0,0.5)] group hover:border-orange-500/30 transition-all duration-500"
    >
      {/* Avatar with glow */}
      <div className="relative">
        <div className="absolute inset-0 bg-orange-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-inner">
          <img
            src={meImg}
            alt="Thinal Dilmith"
            className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#050505] flex items-center justify-center border border-white/10">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
      </div>

      {/* Text Info */}
      <div className="flex flex-col">
        <span className="text-[10px] font-mono font-bold text-orange-500 uppercase tracking-[3px] mb-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
           Status
        </span>
        <div className="flex flex-col">
          <p className="text-white font-bold text-sm tracking-tight leading-none mb-1">
             Thinal Dilmith
          </p>
          <p className="text-white/40 text-[10px] font-medium tracking-wider uppercase">
             Available for hire
          </p>
        </div>
      </div>

      {/* Decorative arrow */}
      <div className="ml-4 w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500 cursor-pointer">
         <i className="fa-solid fa-chevron-right text-white/40 group-hover:text-black text-[10px]" />
      </div>
    </motion.div>
  );
};

export default ProfileBadge;
