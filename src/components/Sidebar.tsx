import { motion } from "framer-motion";
import { useState } from "react";
import { Links } from "./Links";
import { ToggleButton } from "./ToggleButton";

export const SideBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const variants = {
    open: {
      clipPath: "circle(1400px at 50px 50px)",
      transition: { type: "spring", stifness: 20 },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 },
    },
  };

  return (
   
      <motion.div
        className="flex flex-col items-center justify-center bg-white text-black fixed top-0 left-0 md:w-[400px] w-full lg: bottom-0 z-10"
        animate={open ? "open" : "closed"}
        variants={variants}
      >
        <div className=" bg-white">
          <Links />
        </div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
   
  );
};
