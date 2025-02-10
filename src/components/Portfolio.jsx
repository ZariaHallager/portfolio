import { useState } from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";
import Skills from "./Skills";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <header>
        <NavBar />
        <h1>Zaria Hallager</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <main>
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <footer>
        <p>&copy; Elmo the Dev</p>
      </footer>
    </div>
  );
};

export default Portfolio;
