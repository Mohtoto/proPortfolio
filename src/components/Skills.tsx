import { motion } from "framer-motion";
import { teckStack } from "../../data";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section id="SKILLS" className="snap-start bg-black p-8">
      <div className="row">
      <h1 className="text-[24px] m-0 text-white">Skills</h1>
    
        <motion.div
          // initial={{ opacity: 0 }}
          // whileInView={{opacity : 1}}
          // transition={{ duration: 1.5 }}
          className="h-screen flex relative flex-col text-center md:text-left md:flex-row  md:px-10 min-h-screen justify-center md:space-y-0 mx-auto items-center border-top"
        >
          <div>
            <div className="mb-12">
              <div className="grid grid-cols-4 gap-5 mt-12">
                {teckStack.slice(0, teckStack.length / 2).map((item, index) => (
                  <Skill
                    item={item.image}
                    progress={item.progress}
                    key={index}
                  />
                ))}

                {teckStack
                  .slice(teckStack.length / 2, teckStack.length)
                  .map((item, index) => (
                    <Skill
                      item={item.image}
                      progress={item.progress}
                      key={index}
                      directionLeft
                    />
                  ))}
              </div>
            </div>
          </div> 
          
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
