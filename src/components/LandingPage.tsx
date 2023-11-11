import useMediaQuery from "../hooks/UseMediaQuery";
import { H1 } from "../shared/H1";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Skills from "./Skills";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import LottiePlayer from "react-lottie-player";
import * as icon from "../assets/top.json";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const aboveMedia = useMediaQuery("(min-width: 767px)");

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollY = window.scrollY || window.pageYOffset;

      // Set the visibility based on the scroll position
      setIsVisible(scrollY > 500); // You can adjust the value (100) based on when you want the component to appear
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <main>
      <section id="HOME" className="h-[100vh] relative">
        <NavBar />
        {/* <NavBullets/> */}

        <div className="row">
          <div className="flex flex-col gap-20 w-full items-center justify-center h-[100vh]">
            <div className="flex flex-col gap-8">
              {aboveMedia ? (
                <H1>MOHAMMAD TOTONCHY</H1>
              ) : (
                <h1 className=" uppercase text-[20px] text-white text-center font-semibold">
                  MOHAMMAD TOTONCHY
                </h1>
              )}

              <h2 className="text-white text-[12px] lg:text-[22px] uppercase text-center tracking-widest font">
                software engineer & front end developer.
              </h2>
            </div>
          </div>
        </div>

        <a
          href="#PROJECTS"
          className=" w-[25px] h-[50px] rounded-full absolute bottom-8 left-[50%] border-solid border-2 border-[#ec4e39]"
        >
          <div className="scroll__icon"></div>
        </a>

        {isVisible && (
          <a href="#HOME" className=" fixed right-0 bottom-0 p-8">
            <LottiePlayer animationData={icon} loop play className="w-[60px] transition duration-300 ease-in-out" />
          </a>
        )}
      </section>

      <Projects />

      <Skills />

      <Aboutme />

      <ContactMe />

      <Footer />
    </main>
  );
};

export default LandingPage;
