import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export const Links = () => {
  const location = useLocation();

  const MenuItems = [
    {
      tile: "HOME",
      anchor: "#HOME",
    },
    {
      tile: "ABOUT ME",
      anchor: "#ABOUTME",
    },
    {
      tile: "PROJECTS",
      anchor: "#PROJECTS",
    },
    {
      tile: "CONTACT ME",
      anchor: "#CONTACT",
    },

    {
      title: "SKILLS",
      anchor: "#SKILLS",
    },
  ];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const ItemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <motion.div
      className="flex flex-col w-full h-full items-center justify-center gap-5"
      variants={variants}
    >
      {MenuItems.map((item, _) => (
        <motion.a
          className={`text-[40px] ${
            location.hash === item.anchor ? "text-[#ec4e39]" : "text-black "
          }`}
          href={`${item.anchor}`}
          variants={ItemVariants}
          whileHover={{ scale: 1.1 }}
          key={_}
        >
          {item.tile}
        </motion.a>
      ))}
    </motion.div>
  );
};
