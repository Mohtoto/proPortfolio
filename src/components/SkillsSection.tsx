import { motion } from "framer-motion";
// import * as animationData from "../../animmmm.json"; // Import your animation JSON file
import LottiePlayer from "react-lottie-player";
import { Section } from "../shared/Section";
import useMediaQuery from "../hooks/UseMediaQuery";
import { SecondaryHeader } from "../shared/SecondaryHeader";

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "React / React Native",
    level: 90,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  {
    title: "Typescript",
    level: 60,
  },
  {
    title: "3D Modeling",
    level: 40,
  },
];
const languages = [
  {
    title: "🇫🇷 French",
    level: 100,
  },
  {
    title: "🇺🇸 English",
    level: 80,
  },
  {
    title: "🇯🇵 Japanese",
    level: 20,
  },
];


export const SkillsSection = () => {

  const aboveMedia = useMediaQuery("(min-width: 767px)");
  return (
    <Section>
      {aboveMedia? <SecondaryHeader>My TeckStack</SecondaryHeader> : <h1 className="text-[40px] text-center text-white mb-5">My Teck-Stack</h1>}
      <div className="w-full lg:flex text-white">
        <motion.div whileInView={"visible"} className=" w-[50%]">
          <h2 className="text-2xl lg:text-5xl font-bold text-[#e37f51] tracking-wider">Skills</h2>
          <div className=" mt-8 space-y-4 text-white">
            {skills.map((skill, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="lg:text-xl text-gray-800"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-[#eb89ff] rounded-full "
                    style={{ width: `${skill.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className=" text-2xl lg:text-5xl font-bold text-[#e37f51] tracking-wider mt-10">Languages</h2>
            <div className=" mt-8 space-y-4">
              {languages.map((lng, index) => (
                <div className="w-64" key={index}>
                  <motion.h3
                    className="lg:text-xl text-gray-800"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {lng.title}
                  </motion.h3>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <motion.div
                      className="h-full bg-[#eb89ff] rounded-full "
                      style={{ width: `${lng.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 2 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="lg:w-[50%] w-full ">
          <LottiePlayer
            loop
            animationData={animationData}
            play
            className="lg:w-[800px] w-[350px]"
            // style={{ width: "350px", height: "350px" , marginRight : '100px' }}  // Adjust size as needed
          />
        </div>
      </div>
    </Section>
  );
};
