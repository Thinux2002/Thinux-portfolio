import React from "react";
import { technologies } from "../constants";

function TechStack() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-4">
      {technologies.map((tech, index) => (
        <div 
          key={tech.name} 
          className="tech-icon-container group" 
          title={tech.name}
        >
          <img 
            src={tech.icon} 
            alt={tech.name} 
            className="w-10 h-10 object-contain transition-all duration-300 group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
}

export default TechStack;
