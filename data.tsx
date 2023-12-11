import react from "./src/assets/react.svg";
import express from "./src/assets/express.svg";
import html from "./src/assets/html.svg";
import javascript from "./src/assets/js.svg";
import tailwindcss from "./src/assets/tailwindcss.svg";
import typescript from "./src/assets/ts.svg";
import mongodb from "./src/assets/mongodb.svg";
import sass from "./src/assets/sass.svg";
import sql from "./src/assets/sql.svg";
import node from "./src/assets/node.svg";
import css from "./src/assets/css.svg";
import github from "./src/assets/guthub.svg";
import firebase from "./src/assets/firebase.svg";
import geegle from "./public/geegle.png";
import lib from "./public/lib.png";
import nbakr from "./public/nbakr.png";
import kat from "./public/kat.png";
import tweet from "./public/tweet.png";
import versent from './src/assets/images/ver.png'
import front from './src/assets/images/front.png'
import { Projects as ProjectsType, teckStack as teckStackTypes ,Experiences as experienceTypes } from './types/types';




export const projects: Array<ProjectsType> = [
  // {
  //   title1: "Gmail",
  //   title2: "Clone",
  //   src: gam,
  //   link: "https://jmaill.netlify.app/",
  // },npm run dev
  
  {
    title1: "E-com",
    title2: "Library",
    src: lib,
    link: "https://library-ecom.netlify.app/",
  },
  {
    title1: "Google",
    title2: "Clone",
    src: geegle,
    link: "https://geegle.netlify.app/",
  },
  {
    title1: "Advanced",
    title2: "Portfolio",
    src: nbakr,
    link: "https://bakr-zeyad.netlify.app/",
  },
  {
    title1: "Twitter",
    title2: "Clone",
    src: tweet,
    link: "https://tweeterr.netlify.app/",
  },
  {
    title1: "Kat",
    title2: "&Dog",
    src: kat,
    link: "https://katanddog.com.au/",
  },
];


export const teckStack: Array<teckStackTypes> = [ 
  
{
  image: react,
  progress: 100

},
  {
  image: node,
  progress: 90

},
  {
  image: express,
  progress: 80

},
  {
  image: mongodb,
  progress: 70

},
  {
  image: sql,
  progress: 70

},
  {
  image: html,
  progress: 100

},
  {
  image: css,
  progress: 100

},
  {
  image: javascript,
  progress: 90

},
  {
  image: typescript,
  progress: 80

},
 {
  image: tailwindcss,
  progress: 100

},
  {
  image: sass,
  progress: 100

},
  {
  image: github,
  progress: 100

},
  {
  image: firebase,
  progress: 90

},
];


export const experiences: Array<experienceTypes> = [
  {
      title: "Associate software Engineer",
      company_name: "Versent",
      icon: versent,
      iconBg: "#fff",
      date: "Jan 2023 - current",
      points: [
        "Developed and maintained 3 Restful APIs using c# for HBF",
        "React was used to test certain codes on the frontend",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products",
        "Part of a team migrating MuleSoft to AWS for Curtin University using Typescript and cdk",
        "Error handling app code created and structured to allow for flexibility to handle different types of errors throughout the projec",
        "Unit testing using JEST was implemented to mock real functions and apis endpoints to ensure functionality is met",
        "Actively participated in daily stand-up meetings, providing updates on progress and any potential impediments to team member",
        "Integrated Slack and Confluence to enhance team communication, collaboration, and knowledge sharing within the agile development environment",
        "Facilitated effective communication and encouraged open discussions during sprint retrospectives to identify areas for improvement and implement actionable changes",
      ],
  },
  {
      title: "Freelance Frontend Developer",
      company_name: "Self Employed ",
      icon: front,
      iconBg: "#fff",
      date: "Apr 2022 - Jan 2023",
      points: [
          "Delivered 5 professional websites using HTML5, CSS3 (+ SCSS, BEM), JavaScript and React best practises.",
          "Improved website performance by compressing, caching and lazy loading images and components",
          "Included SEO, responsive, multi-platform and hosting support, enabling their website to be used by any browser or device in the world.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          
      ],
  },
  {
      title: "Frontend Developer Support ",
      company_name: "Frontend Simplified ",
      icon: front,
      iconBg: "#fff",
      date: "May 2022 - Jul 2022",
      points: [
        "Supported 1,000+ students using HTML, CSS, Flexbox, JavaScript and React best practises",
        "Utilized debugging best practises using Google Chrome inspect element tooling",
        "Simplified difficult programming concepts including responsive website development, CSS layout, Promises and API requests",
      ],
  },
  // {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#a2d2ff",
  //     date: "Jan 2023 - Present",
  //     points: [
  //         "Developing and maintaining web applications using React.js and other related technologies.",
  //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //         "Implementing responsive design and ensuring cross-browser compatibility.",
  //         "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  // },
];