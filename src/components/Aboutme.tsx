import { motion } from 'framer-motion';
import { useState } from 'react'
import styles from "../../scssModules/Mask.module.scss";
import useMousePosition from '../hooks/UseMousePosition';

const Aboutme = () => {

    const [isHover, setIsHover] = useState<boolean>(false);

    const { x, y } = useMousePosition();
  
    const size = isHover ? 400 : 0;

  return (
    <section id="ABOUTME" className="bg-black">
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

          
          <div className={`${styles.body}`}>
            <div>
            <h1 className="text-[24px] mt-12 text-white">About me</h1>
              <p className="border-top">
                I'm a <span>selectively skilled</span> product designer with
                strong focus on producing high quality & impactful digital
                experience.
              </p>
            </div>
          </div>
        </header>
      </section>
  )
}

export default Aboutme