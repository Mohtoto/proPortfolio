import { motion } from "framer-motion";

import { teckStack } from "../../data";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration:1,
      
        staggerChildren: 0.1,
        
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };


 
  return (
    <section id="SKILLS" className=" bg-[#dbdada] p-20 min-h-screen">
      <div className="row">
        <div className="flex flex-col justify-center">
          <h1 className="text-[24px] m-0 text-black">Skills</h1>
          <motion.div
            className="flex flex-col gap-8 border-top-black"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="grid grid-cols-5 mt-12" variants={containerVariants}>
              {teckStack.slice(0, 5).map((item, index) => (
                <motion.div className="w-full" key={index} variants={itemVariants}>
                  <img src={item} alt="" className="w-[130px] mx-auto" />
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="grid grid-cols-4 cursor-pointer" variants={containerVariants}>
              {teckStack.slice(5, 9).map((item, index) => (
                <motion.div className="w-full" key={index} variants={itemVariants}>
                  <img src={item} className="w-[130px] mx-auto" alt="" />
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="grid grid-cols-4" variants={containerVariants}>
              {teckStack.slice(9).map((item, index) => (
                <motion.div className="w-full" key={index} variants={itemVariants}>
                  <img src={item} className="w-[130px] mx-auto" alt="" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
