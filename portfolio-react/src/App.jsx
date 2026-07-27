import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import IntroScreen from "./components/IntroScreen";
import Highlights from "./components/Highlights";
function App() {
  return (
    <ThemeProvider>
      <IntroScreen>
        <SmoothScroll>
          <Navbar />
          <main>
            <Hero />
            <Highlights />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </SmoothScroll>
      </IntroScreen>
    </ThemeProvider>
  );
}

export default App;
