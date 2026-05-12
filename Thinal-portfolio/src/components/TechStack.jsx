import React from "react";
import { techStackIcons } from "../constants";

function TechStack() {
  return (
    <div className="mt-12 text-white text-opacity-100 flex justify-center mt-10 flex flex-wrap gap-7 justify-center">
      {techStackIcons.map((icon, index) => (
          <i key={index} className={`${icon} text-[40px]`}></i>
        ))}
    </div>
  );
}

export default TechStack;
