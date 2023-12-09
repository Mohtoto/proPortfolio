import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Experience from "./Experience";
import Home from "./Home";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    // Reset scroll position to the top
    window.scrollTo(0, 0);

    // Update the URL without adding a new entry to the browser's history
    window.history.replaceState({}, document.title, window.location.pathname);
  }, []);

  return (
    <main>
      <Home />
      <Projects />
      <Skills />
      <Experience />
      <ContactMe />
      <Footer />
    </main>
  );
};

export default LandingPage;
