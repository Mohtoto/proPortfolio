import icon2 from "./public/h1.png";
// import * as ReactData from "./react.json"; // Import your animation JSON file
// import * as native from "./native.json"; // Import your animation JSON file
// import * as laptop from "./laptop.json"; // Import your animation JSON file
import reactSvg from "./public/react.svg";
import softwareSvg from "./public/softwaree.svg";
import expo from "./public/expo.svg";
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
import gam from "./public/gam.png";
import geegle from "./public/geegle.png";
import lib from "./public/lib.png";
import nbakr from "./public/nbakr.png";
import tweet from "./public/tweet.png";


export const skillsInfo = [
  {
    icon: softwareSvg,
    title: "SoftWare Development",
    icon2,
    description:
      "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
  },
  {
    icon: reactSvg,
    title: "Frontend Dev",
    icon2,
    description:
      "Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
  },
  {
    icon: expo,
    title: "Flutter Dec",
    icon2,
    description:
      "Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.",
  },
];

  interface Projects {
    title1: string;
    title2: string;
    src: string;
    link: string;
  }


export const projects: Array<Projects> = [
  {
    title1: "Gmail",
    title2: "Clone",
    src: gam,
    link: "https://jmaill.netlify.app/",
  },
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
    title1: "E-",
    title2: "Portfoilio",
    src: nbakr,
    link: "https://bakr-zeyad.netlify.app/",
  },
  {
    title1: "Twitter",
    title2: "Clone",
    src: tweet,
    link: "https://tweeterr.netlify.app/",
  },
];


export const teckStack = [
  react,
  node,
  express,
  mongodb,
  sql,
  html,
  css,
  javascript,
  typescript,
  tailwindcss,
  sass,
  github,
  firebase,
];
