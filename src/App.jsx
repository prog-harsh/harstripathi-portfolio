import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import TechStack from "./components/TechStack";
import ScrollButton from "./components/ScrollButton";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("luxury");

  const toggleTheme = (theme) => {
    if (theme === "wireframe") {
      setTheme("luxury");
      localStorage.setItem("theme", "luxury");
    } else {
      setTheme("wireframe");
      localStorage.setItem("theme", "wireframe");
    }
    console.log(theme);
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    theme && setTheme(theme);
  }, []);
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    if (theme === "wireframe") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);
  return (
    <div className="dark:text-trueGray-100 text-trueGray-800 font-Roboto">
      <div className="flex flex-col h-screen">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Home />
      </div>
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
