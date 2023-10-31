import { useState } from "react";
import useMediaQuery from "../hooks/UseMediaQuery";
import useMousePosition from "../hooks/UseMousePosition";
import { H1 } from "../shared/H1";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import styles from "../../scssModules/Mask.module.scss";
import Project from "./Project";
import gam from "../../public/gam.png";
import geegle from "../../public/geegle.png";
import lib from "../../public/lib.png";
import nbakr from "../../public/nbakr.png";
import tweet from "../../public/tweet.png";
import { teckStack } from "../../data";
import Footer from "./Footer";

const LandingPage = () => {
  interface Projects {
    title1: string;
    title2: string;
    src: string;
    link: string;
  }


  const projects: Array<Projects> = [
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
  const aboveMedia = useMediaQuery("(min-width: 767px)");

  const [isHover, setIsHover] = useState<boolean>(false);

  const { x, y } = useMousePosition();

  const size = isHover ? 300 : 40;

  const rows = [];
  let start = 0;
  let numIcons = 1;

  while (start < teckStack.length) {
    rows.push(teckStack.slice(start, start + numIcons));
    start += numIcons;
    numIcons++;
  }

  return (
    <main>
      <section id="HOME" className="h-[100vh] relative">
        <NavBar />

        <div className="row">
          <div className="flex flex-col gap-20 w-full items-center justify-center h-[100vh]">
            <div className="flex flex-col gap-8">
              {aboveMedia ? (
                <H1>MOHAMMAD TOTONCHY</H1>
              ) : (
                <h1 className=" uppercase text-[20px] text-white text-center font-semibold">
                  MOHAMMAD TOTONCHY
                </h1>
              )}

              <h2 className="text-white text-[12px] lg:text-[22px] uppercase text-center tracking-widest font">
                software engineer & front end developer.
              </h2>
            </div>
          </div>
        </div>

        <a
          href="#ABOUTME"
          className=" w-[25px] h-[50px] rounded-full absolute bottom-8 left-[50%] border-solid border-2 border-[#ec4e39]"
        >
          <div className="scroll__icon"></div>
        </a>
      </section>

      <section id="PROJECTS">
        <div className="row">
          <div className="h-screen flex items-center justify-center mt-12">
            <div className="w-[70%]">
              <p>Featured Work</p>
              {projects.map((project, index) => {
                return <Project project={project} key={index} />;
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="SKILLS" className="bg-[#000000] p-20">
        <div>
          <H1>Skills</H1>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-5 gap-6">
            {teckStack.slice(0, 5).map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="w-full"
                key={index}
              >
                <img src={item} alt="" className="w-[130px] mx-auto" />
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-4 cursor-pointer">
            {teckStack.slice(5, 9).map((item, index) => (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="w-full"
                key={index}
              >
                <img src={item} className="w-[130px] mx-auto" alt="" />
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-4">
            {teckStack
              .slice(9)

              .map((item, index) => (
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.7, delay: 1 }}
                  className="w-full"
                  key={index}
                >
                  <img src={item} className="w-[130px] mx-auto" alt="" />
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <section id="ABOUTME">
        <header className={styles.main}>
          <h1 className="text-[150px] text-center tracking-wider font-bold ">
            About ME
          </h1>
          <motion.div
            className={styles.mask}
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          >
            <p
              onMouseEnter={() => {
                setIsHover(true);
              }}
              onMouseLeave={() => {
                setIsHover(false);
              }}
            >
              A visual designer - with skills that haven't been replaced by A.I
              (yet) - making good shit only if the paycheck is equally good.
            </p>
          </motion.div>

          <div className={styles.body}>
            <p>
              I'm a <span>selectively skilled</span> product designer with
              strong focus on producing high quality & impactful digital
              experience.
            </p>
          </div>
        </header>
      </section>

      <Footer />
    </main>
  );
};

export default LandingPage;
