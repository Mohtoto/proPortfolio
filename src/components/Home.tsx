import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/UseMediaQuery";
import NavBar from "./NavBar";
import LottiePlayer from "react-lottie-player";
import * as icon from "../assets/top.json";
import { H1 } from "../shared/H1";

const Home = () => {
  const aboveMedia = useMediaQuery("(min-width: 780px)");

  const [isVisible, setIsVisible] = useState<any>(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Calculate the scroll position
      const scrollY = window.scrollY || window.pageYOffset;

      // Set the visibility based on the scroll position
      setIsVisible(scrollY > 500); // You can adjust the value in px (100px) based on when you want the component to appear
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <section id="HOME" className="h-[100vh] relative">
      <NavBar />
      {/* <NavBullets/> */}

      <div className="row">
        <div className="flex flex-col gap-20 w-full items-center justify-center h-[100vh]">
          <div className="flex flex-col gap-8">
            {aboveMedia ? (
              <H1>MOHAMMAD TOTONCHY</H1>
            ) : (
              <h1 className=" uppercase text-[50px] text-white text-center font-semibold">
                MOHAMMAD TOTONCHY
              </h1>
            )}

            <h2 className="text-white text-[20px] lg:text-[22px] uppercase text-center tracking-widest font">
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
        <a
          href="#HOME"
          className=" fixed right-8 bottom-0 p-8 z-50 hidden md:flex"
        >
          <LottiePlayer
            animationData={icon}
            loop
            play
            className="w-[60px] transition duration-300 ease-in-out"
          />
        </a>
      )}
    </section>
  );
};

export default Home;
