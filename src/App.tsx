import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import PreLoader from "./components/PreLoader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);

        document.body.style.cursor = "default";

        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <AnimatePresence>
        <LandingPage />
        
      </AnimatePresence>

      <AnimatePresence mode="wait">{isLoading && <PreLoader />}</AnimatePresence>
    </>
  );
};

export default App;
