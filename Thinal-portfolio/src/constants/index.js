import {
  companylogos,
  projectImgs,
  servicesImgs,
  socialMediaLogos,
  technologiesImgs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialLinks = [
  {
    icon: socialMediaLogos.linkedin,
    name: "linkedin",
    url: "www.linkedin.com/in/thinal-dewnayana-9b862328b",
  },
  {
    icon: socialMediaLogos.githubicon,
    name: "github",
    url: "https://github.com/Thinux2002",
  },
  {
    icon: socialMediaLogos.facebook,
    name: "facebook",
    url: "https://www.facebook.com/thinal.dilmith.52",
  },
  {
    icon: socialMediaLogos.instagram,
    name: "instagram",
    url: "https://www.instagram.com/t_h_i_n_u_x",
  },
  {
    icon: socialMediaLogos.twitter,
    name: "twitter",
    url: "https://x.com/Thinal2002",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: servicesImgs.web,
  },
  {
    title: "Mobile App Developer",
    icon: servicesImgs.mobile,
  },
  {
    title: "UI/UX Designer",
    icon: servicesImgs.backend,
  },
  {
    title: "New Innovator",
    icon: servicesImgs.creator,
  },
];

const interests = [
  {
    title: "New Innovations",
  },
  {
    title: "Robotics",
  },
  {
    title: "Gaming",
  },
  {
    title: "3D Modeling",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: technologiesImgs.html,
  },
  {
    name: "CSS 3",
    icon: technologiesImgs.css,
  },
  {
    name: "JavaScript",
    icon: technologiesImgs.javascript,
  },
  {
    name: "React JS",
    icon: technologiesImgs.reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: technologiesImgs.tailwind,
  },
  {
    name: "Node JS",
    icon: technologiesImgs.nodejs,
  },
  {
    name: "MongoDB",
    icon: technologiesImgs.mongodb,
  },
  {
    name: "TypeScript",
    icon: technologiesImgs.typescript,
  },
  {
    name: "git",
    icon: technologiesImgs.git,
  },
  {
    name: "figma",
    icon: technologiesImgs.figma,
  },
];

const experiences = [
  // {
  //   title: "UI Designer",
  //   company_name: "Battle of the Maroons Live Score App",
  //   icon: companylogos.acicts,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "",
  //   ],
  // },
  {
    title: "Software Developer",
    company_name: "O3DynamiX",
    icon: companylogos.o3dynamix,
    iconBg: "#000000",
    date: "Oct 2024 - Present",
    StartDate: "2024-10-01",
    points: [""],
  },
  {
    title: "Software Engineer (Intern)",
    company_name: "Board of Investment, Sri Lanka",
    icon: companylogos.boi,
    iconBg: "#000000",
    date: "Nov 2024 - Jun 2025",
    StartDate: "2024-11-29",
    points: [""],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Board of Investment, Sri Lanka",
    icon: companylogos.boi,
    iconBg: "#000000",
    date: "May 2025 - Present",
    StartDate: "2025-05-29",
    points: [""],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "RadioOneAI",
    description:
      "AI-powered radiology platform for brain tumor detection, severity scoring, and vision-language reporting using MRI data.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "deep-learning",
        color: "green-text-gradient",
      },
      {
        name: "computer-vision",
        color: "pink-text-gradient",
      },
    ],
    image: projectImgs.radiooneai,
    source_code_link: "https://github.com/",
  },

  {
    name: "AuraLink",
    description:
      "Smart desk assistant bot integrating AI and IoT sensors for automation, voice interactions, and real-time device control.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "iot",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: projectImgs.auralink,
    source_code_link: "https://github.com/",
  },

  {
    name: "Autonomous TurtleBot3",
    description:
      "Autonomous navigation system using SLAM and path-planning algorithms with obstacle avoidance and real-time mapping.",
    tags: [
      {
        name: "ros",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "robotics",
        color: "pink-text-gradient",
      },
    ],
    image: projectImgs.turtlebot,
    source_code_link: "https://github.com/",
  },

  {
    name: "Kandyan Studio",
    description:
      "Customer care and loyalty management website developed using the MERN stack with reporting and UI/UX features.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: projectImgs.Kandyan,
    source_code_link: "https://github.com/",
  },

  {
    name: "StockworkX",
    description:
      "Stock management system with database schema design, wireframing, and feature implementation for group project development.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: projectImgs.stockworx,
    source_code_link: "https://github.com/",
  },

  {
    name: "Ceft Banking Website",
    description:
      "Banking web application for checkbook requests, customer reviews, and ratings with frontend and backend integration.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: projectImgs.ceftbank,
    source_code_link: "https://github.com/",
  },

  {
    name: "MathMinder",
    description:
      "Todo and reminder mobile application with CRUD functionality, local storage, and clean Android UI layouts.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "mobile-app",
        color: "pink-text-gradient",
      },
    ],
    image: projectImgs.mathminder,
    source_code_link: "https://github.com/",
  },

  {
    name: "Reclaim System",
    description:
      "Lost and found management system for reporting, tracking, and managing items digitally with admin review features.",
    tags: [
      {
        name: "web-app",
        color: "blue-text-gradient",
      },
      {
        name: "management-system",
        color: "green-text-gradient",
      },
      {
        name: "tracking",
        color: "pink-text-gradient",
      },
    ],
    image: projectImgs.reclaim,
    source_code_link: "https://github.com/",
  },

  {
    name: "Thinal Portfolio",
    description:
      "Personal portfolio website built using React, Three.js, and EmailJS with interactive 3D animations and responsive UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "emailjs",
        color: "pink-text-gradient",
      },
    ],
    image: projectImgs.portfolio,
    source_code_link: "https://github.com/",
  },

  {
    name: "BOI Online Gateway",
    description:
      "Online investment approval platform with secure application management, tracking, and administrative workflows.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: ".net",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: projectImgs.boi,
    source_code_link: "https://github.com/",
  },
];

const techStackIcons = [
  "fa-brands fa-react",
  "fa-brands fa-node",
  "fab fa-node-js",
  "fab fa-npm",
  "fa-brands fa-figma",
  "fa-brands fa-html5",
  "fa-brands fa-square-js",
  "fa-brands fa-git-alt",
  "fa-brands fa-php",
  "fa-brands fa-css3-alt",
  "fa-brands fa-bootstrap",
  "fa-brands fa-github",
  "fa-brands fa-bitbucket",
];

export {
  services,
  interests,
  technologies,
  experiences,
  testimonials,
  projects,
  techStackIcons,
};
