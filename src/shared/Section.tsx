import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
  }
  
  export const Section = (props: Props) => {
    const { children } = props;
  
    return (
      <motion.section
        className={`
      h-screen w-screen p-8 max-w-7xl mx-auto
      flex flex-col items-start mt-20 
      `}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.6,
          },
        }}
      >
        {children}
      </motion.section>
    );
  };