import { projects } from '../../data';
import Project from './Project';

const Projects = () => {
  return (
    <section id="PROJECTS" className="bg-black text-white">
    <div className="row">
    <p className="text-[24px] m-0 text-white">Featured Work</p>

      <div className="h-screen flex items-center justify-center border-top">
        <div className="w-[70%]">
          {projects.map((project, index) => {
            return <Project project={project} key={index} />;
          })}
        </div>
      </div>
    </div>
  </section>  
  )
}

export default Projects