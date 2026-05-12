import React from "react";
import { socialLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-10 border-t border-white/5 bg-[#020402]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
           <h4 className="text-white font-black tracking-[3px] uppercase text-xl">Thinal</h4>
           <p className="text-secondary text-sm">Building digital experiences that matter.</p>
        </div>

        <div className="flex flex-col items-center gap-6">
           <ul className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500 transition-all duration-300"
                  >
                    <img src={link.icon} alt={link.name} className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
           </ul>
           <p className="text-white/30 text-[11px] uppercase tracking-[2px]">
             © {currentYear} Thinal Dewnayana. All Rights Reserved.
           </p>
        </div>

        <div className="hidden lg:flex flex-col items-end gap-2">
           <p className="text-white font-medium text-sm">Colombo, Sri Lanka</p>
           <p className="text-secondary text-sm">thinaldewnayana@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
