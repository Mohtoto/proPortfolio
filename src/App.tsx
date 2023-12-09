import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";
import PreLoader from "./components/PreLoader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sentpage from "./components/Sentpage";
const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;

  //     const locomotiveScroll = new LocomotiveScroll();

  //     locomotiveScroll.update();

  //     setTimeout(() => {
  //       setIsLoading(false);

  //       document.body.style.cursor = "default";

  //       window.scrollTo(0, 0);
  //     }, 2000);
  //   })();
  // }, []);

  return (
    <>
      {/* <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence> */}
      <AnimatePresence>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route path="Confirmation" element={<Sentpage />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </>
  );
};

export default App;
