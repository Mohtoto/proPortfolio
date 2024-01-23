import { projects } from "../../data";
import Project from "./Project";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <section id="PROJECTS" className="bg-[url('./assets/download.png')] text-white  p-8">
      <div className="row">
        <p className="text-[24px] m-0 text-white">Featured Work</p>
        <div className="border-top"></div>
        <div className=" h-screen flex flex-col">
          <div className=" flex items-center justify-center h-screen">
            <motion.div 
            className="w-[90%] md:w-full">
              {projects.map((project, index) => {
                return <Project project={project} key={index} />
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
