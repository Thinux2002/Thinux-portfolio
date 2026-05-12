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
    name: "Three JS",
    icon: technologiesImgs.threejs,
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
    name: "RoomMate",
    description:
      "An app for roommates to efficiently manage chores, bills, schedules, and communication, ensuring a harmonious and organized living environment.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: projectImgs.roommate,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fixr",
    description:
      "Fixr is a versatile app designed to streamline handyman services by efficiently managing job bookings, payments, and client interactions.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "geminiai",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: projectImgs.fixr,
    source_code_link: "https://github.com/SE-S1-WE-26/Fixr.git",
  },
  {
    name: "Keizerfolio",
    description:
      "The interactive 3D portfolio presents creative works in a three-dimensional space, enhancing visual appeal while showcasing expertise in UI/UX design.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "emailjs",
        color: "pink-text-gradient",
      },
    ],
    image: projectImgs.portfolio,
    source_code_link: "https://github.com/Pahan-Samudika/Keizerfolio.git",
  },
  {
    name: "Kandyan Studio",
    description:
      "A comprehensive solution designed to streamline Kandyan Studio's operations, enhancing efficiency, creativity, project management, and team collaboration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "purple-text-gradient",
      },
    ],
    image: projectImgs.kandyan,
    source_code_link: "https://github.com/ITP-T067/T067-Kandyan-Studio.git",
  },
  {
    name: "StockWorX",
    description:
      "Efficient online stock management system with roles for various users. Developed using JSP Servlet, MySQL, and OOP.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: projectImgs.stockworx,
    source_code_link: "https://github.com/Pahan-Samudika/StockWorX.git",
  },
  {
    name: "MedCare",
    description:
      "MedCare provides comprehensive healthcare services, focusing on delivering high-quality care and personalized treatment to enhance patient well-being.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "purple-text-gradient",
      },
    ],
    image: projectImgs.medcare,
    source_code_link: "https://github.com/SE-S1-WE-26/MedCare-Frontend.git",
  },
  {
    name: "RemMe",
    description:
      "Simple and intuitive task management app designed to help users stay organized and productive.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "room",
        color: "green-text-gradient",
      },
    ],
    image: projectImgs.remme,
    source_code_link: "https://github.com/Pahan-Samudika/RemMe.git",
  },
  {
    name: "TapTap",
    description:
      "Interactive mobile game enhancing cognitive skills. Players tap dots with limited chances, increasing speed for reflex challenge.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "androidstudio",
        color: "green-text-gradient",
      },
    ],
    image: projectImgs.taptap,
    source_code_link: "https://github.com/Pahan-Samudika/TapTap.git",
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
