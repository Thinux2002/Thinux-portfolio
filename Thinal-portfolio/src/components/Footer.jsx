import React from "react";
import { socialLinks, navLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#020402] pt-20 pb-10 px-6 md:px-16 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <span className="text-white font-black tracking-[4px] uppercase text-2xl">Thinal</span>
                <div className="w-2 h-2 rounded-full bg-orange-500" />
             </div>
             <p className="text-secondary text-sm leading-relaxed mb-8 max-w-xs">
                Crafting modern digital experiences with precision and passion. Always pushing the boundaries of what's possible on the web.
             </p>
             <div className="flex items-center gap-4">
                {socialLinks.slice(0, 5).map((link) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group"
                    title={link.name}
                  >
                    <img 
                      src={link.icon} 
                      alt={link.name} 
                      className="w-5 h-5 opacity-80 invert brightness-0 group-hover:opacity-100 group-hover:invert-0 group-hover:brightness-100 transition-all" 
                    />
                  </a>
                ))}
             </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
             <h4 className="text-white font-bold text-lg mb-8 tracking-tight">Navigation</h4>
             <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="text-secondary hover:text-orange-500 text-sm transition-colors flex items-center gap-2 group">
                       <span className="w-0 group-hover:w-4 h-px bg-orange-500 transition-all duration-300" />
                       {link.title}
                    </a>
                  </li>
                ))}
             </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-1">
             <h4 className="text-white font-bold text-lg mb-8 tracking-tight">Get In Touch</h4>
             <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-envelope text-orange-500 text-sm" />
                   </div>
                   <div>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Email</p>
                      <p className="text-white text-sm">thinaldewnayana@gmail.com</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-location-dot text-orange-500 text-sm" />
                   </div>
                   <div>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Location</p>
                      <p className="text-white text-sm">Colombo, Sri Lanka</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Call to Action */}
          <div className="col-span-1">
             <h4 className="text-white font-bold text-lg mb-8 tracking-tight">Newsletter</h4>
             <p className="text-secondary text-sm mb-6">Stay updated with my latest projects and digital explorations.</p>
             <div className="flex p-1.5 rounded-2xl bg-white/5 border border-white/10 group focus-within:border-orange-500/50 transition-all">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-transparent border-none focus:outline-none text-white text-xs px-3 flex-1"
                />
                <button className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-all group-hover:shadow-[0_0_15px_rgba(239,123,69,0.4)]">
                   <i className="fa-solid fa-arrow-right text-white text-sm" />
                </button>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-white/30 text-[11px] uppercase tracking-[3px] text-center md:text-left font-medium">
             © {currentYear} Thinal Dewnayana • Crafted with Precision
           </p>
           <div className="flex items-center gap-8">
              <a href="#" className="text-white/30 hover:text-white text-[10px] uppercase tracking-widest transition-colors font-bold">Privacy</a>
              <a href="#" className="text-white/30 hover:text-white text-[10px] uppercase tracking-widest transition-colors font-bold">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
