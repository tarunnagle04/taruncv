import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <>
      <div className="scroll-smooth">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
