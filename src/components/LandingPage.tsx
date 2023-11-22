import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Experience from "./Experience";
import Home from "./Home";

const LandingPage = () => {
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
