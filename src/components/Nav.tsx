import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/UseMediaQuery";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { AnimatePresence, motion } from "framer-motion";

export const Nav = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  const aboveMedia = useMediaQuery("(min-width: 767px)");
  const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)");

  const MenuOpen = () => {
    setOpen((prevState) => !prevState);
  };

  const MenuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MobileMenuVars = {

    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };


  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldFix = scrollY > 500; // Adjust threshold as needed

      setIsFixed(shouldFix);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    //${isFixed ? 'fixed top-0 left-0 right-0 transition-all duration-500 ease bg-white text-black z-10 p-8' : ''}
    <>
      {isAboveMediumScreens ? (
        <div className={` text-white p-4`}>
          <nav className="lg:flex items-center justify-between w-4/5 mx-auto hidden">
            <h1>
              MT.<span className="text-[#ccf381]">_</span>
            </h1>

            <ul className="flex gap-[80px]">
              <li className="list1">
                <a href="#">
                  <span className="span1">{"// home"}</span>
                </a>
              </li>
              <li className="list2">
                <a href="#TeckStack">
                  <span className="span2">{"// Expertise"}</span>
                </a>
              </li>
              <li className="list3">
                <a href="/Work">
                  <span className="span3">{"// Work"}</span>
                </a>
              </li>
              <li className="list4">
                <a href="/Experience">
                  <span className="span4">{"// Experience"}</span>
                </a>
              </li>
              <li className="list5">
                <a href="/Contact">
                  <span className="span5">{"// contact"}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <button
          onClick={MenuOpen}
          className=" absolute right-0 text-white lg:hidden flex p-4 text-[24px]"
        >
          <FaHamburger />
        </button>
      )}

      {/* mobile navbar */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={MenuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-[#e17c28] text-black z-10 font-semibold text-[18px]"
          >
            <button
              onClick={MenuOpen}
              className="text-black absolute right-0 p-4 text-[24px]"
            >
              <AiOutlineClose />
            </button>
            <motion.nav 
            variants={containerVars}
            initial="initial"
            animate="open"
            
            
            className="flex flex-col items-center justify-between ">
              

              
              <motion.ul variants={MobileMenuVars} 
              
                className="flex flex-col justify-center gap-[80px] text-[18px] h-screen">
                <li className="list1">
                  <a href="#">
                    <span className="span1">{"HOME"}</span>
                  </a>
                </li>
                <li className="list2">
                  <a href="#TeckStack">
                    <span className="span2">{"EXPERTISE"}</span>
                  </a>
                </li>
                <li className="list3">
                  <a href="/Work">
                    <span className="span3">{"// Work"}</span>
                  </a>
                </li>
                <li className="list4">
                  <a href="/Experience">
                    <span className="span4">{"// Experience"}</span>
                  </a>
                </li>
                <li className="list5">
                  <a href="/Contact">
                    <span className="span5">{"// contact"}</span>
                  </a>
                </li>
              </motion.ul>
              
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
