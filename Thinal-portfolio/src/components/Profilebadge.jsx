import { motion } from "framer-motion";
import meImg from "../assets/me.png";

const ProfileBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-20 right-4 md:top-24 md:right-12 z-50 flex items-center gap-2 md:gap-5 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-full md:rounded-[2.5rem] p-1.5 md:p-2 md:pr-6 cursor-default group hover:border-orange-500/40 hover:bg-white/[0.06] transition-all duration-700 shadow-2xl overflow-hidden"
    >
      {/* Decorative inner glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Avatar Container */}
      <div className="relative">
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white/5 group-hover:border-orange-500/20 transition-all duration-700">
          <img
            src={meImg}
            alt="Thinal Dilmith"
            className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-1000 ease-out"
          />
        </div>
        
        {/* Animated Pulse Status */}
        <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-black border border-white/10 flex items-center justify-center">
           <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
      </div>

      {/* Text Content - Hidden on Mobile */}
      <div className="hidden md:flex flex-col">
        <div className="flex items-center gap-2 mb-0.5">
           <span className="text-[9px] font-mono font-black text-orange-500 uppercase tracking-[4px]">
              Active
           </span>
           <div className="w-8 h-[1px] bg-white/10 group-hover:w-12 transition-all duration-700" />
        </div>
        
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-[15px] tracking-tight group-hover:text-orange-500 transition-colors">
             Thinal Dewnayana
          </h4>
          <p className="text-white/40 text-[10px] font-medium uppercase tracking-[2px]">
             Software Engineer
          </p>
        </div>
      </div>

      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.div>

  );
};

export default ProfileBadge;
