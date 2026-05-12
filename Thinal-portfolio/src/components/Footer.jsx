import React from "react";
import { socialLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="px-10">
      <hr />
      <footer className="text-white text-[10px] sm:p-10 py-10 flex justify-between items-center sm:justify-end">
        <ul className="list-none sm:hidden flex flex-row gap-2">
          {socialLinks.map((Link) => (
            <li
              key={Link.id}
              className={`hover:text-white text-[18px] md:text-[22px] font-medium cursor-pointer`}
              onClick={() => {
                window.location.href = Link.url;
              }}
            >
              <div className="w-[23px] h-[23px] md:w-[30px] md:h-[30px] rounded-full red-orange-gradient opacity-80 flex items-center justify-center">
                <img src={Link.icon} className="w-[20px] md:w-[28px]" />
              </div>
            </li>
          ))}
        </ul>
        <p className="uppercase ml-5 text-[9px] md:text-[12px]">© {currentYear} Thinal Dewnayana</p>
      </footer>
    </div>
  );
};

export default Footer;
