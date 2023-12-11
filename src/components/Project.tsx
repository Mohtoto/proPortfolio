import { useState } from 'react';
import styles from '../../scssModules/Style.module.scss';
import { motion} from 'framer-motion'

interface ProjectProps {
    project: {
      title1: string;
      title2: string;
      src: string;
      link: string;
    };
  }

  const anim = {
    initial: {width: 0},
    open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {width: 0}
}

export default function Project({ project}: ProjectProps) {
    const [isActive, setIsActive] = useState(false);

    const { title1, title2, src , link } = project;
    return (
        <div  onMouseEnter={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className={styles.project}>
            <p>{title1}</p>
            <motion.div variants={anim} animate={isActive ? "open" : "closed"} className={styles.imgContainer}>
                <a href={`${link}`} target='_blank'><img src={`${src}`}></img></a>
            </motion.div>
            <p>{title2}</p>
        </div>
    )
}




