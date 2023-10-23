import { ReactNode } from "react";
import {motion} from 'framer-motion'


interface Props {
    children: ReactNode; // Update type to ReactNode
  }

export const H1 = (props: Props) => {
  return (
    <motion.h1 
      initial={{ y : -100 , opacity:0}}
      animate={{ y: 0 , opacity: 1}}
      transition={{ duration : 0.5}}
    className="h1 text-center">
        {props.children}
    </motion.h1>
  )
}

