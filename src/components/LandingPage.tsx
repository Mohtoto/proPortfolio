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
import { skillsInfo } from "../../data";
import Skill from "./Skill";

const LandingPage = () => {
  interface Projects {
    title1: string;
    title2: string;
    src: string;
    link: string;
  }

  // interface Skillsmap {
  //   icon: string;
  //   title: string;
  //   description: string;
  // }

  const projects: Projects[] = [
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

  const size = isHover ? 400 : 40;

  return (
    <main>
      <section id="sectionHome" className="h-[100vh] relative">
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
          className=" w-[25px] h-[50px] rounded-full absolute bottom-8 left-[50%] border-solid border-2 border-[#A05B3B]"
        >
          <div className="scroll__icon"></div>
        </a>
      </section>

      <section id="ABOUTME">
        {/* <SkillsSection /> */}
        <header className={styles.main}>
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

      <section id="PROJECTS">
        <div className="row">
          <div className="h-screen flex items-center justify-center mt-12">
            <div className="w-[70%]">
              <p>Featured Work</p>
              {projects.map((project) => {
                return <Project project={project} />;
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="Skills" className="bg-[#1b191d]">
        <div className="row">
          <div className="flex items-center justify-center">
            {skillsInfo.map(({ title, description , icon2 }, index) => (
              <Skill
                key={index}
                title={title}
                description={description}
                icon2={icon2}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
