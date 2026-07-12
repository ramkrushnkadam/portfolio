import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ParticlesBackground from "./components/ParticlesBackground";
import AuroraBackground from "./components/AuroraBackground";

function App() {
  return (
    <>
     <AuroraBackground />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer/>
      <ScrollToTop/>
    </>
  );
}

export default App;