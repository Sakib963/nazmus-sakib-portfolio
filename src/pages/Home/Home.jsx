import AboutMe from "./AboutMe";
import Contact from "./Contact";
import LandingSection from "./LandingSection";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <LandingSection></LandingSection>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
