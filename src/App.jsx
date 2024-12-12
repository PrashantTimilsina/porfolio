import { useState } from "react";
import Contact from "./components/contact/Contact";
import Education from "./components/Education/Education";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Project from "./components/project/Project";
import Sidebar from "./components/sidebar/Sidebar";
import Skill from "./components/skill/Skill";

function App() {
  return (
    <>
      <div className="grid-row-3 grid grid-cols-1 gap-4 sm:grid-cols-[500px_1fr] sm:grid-rows-[100px_1fr]">
        <div className="sm:col-span-2">
          <Nav />
        </div>
        {/*Navigation section*/}
        <div id="home">
          <Sidebar />
        </div>
        {/*Hero section*/}
        <div id="home">
          <Hero />
        </div>
        {/*description section*/}
      </div>
      {/*skill section now start*/}
      <div id="skills">
        <div>
          <Skill />
        </div>
      </div>
      <div id="projects">
        <Project />
      </div>
      <div>
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
