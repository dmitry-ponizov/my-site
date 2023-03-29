import React from "react"

import About from "./components/About"
import Intro from "./components/Intro"
import Jobs from "./components/Jobs"
import Projects from "./components/Projects"
import OtherProjects from "./components/OtherProjects"

const HomePage = () => {
  return (
    <>
      <Intro />

      <About />

      <Jobs />
      
      <Projects />
      
      <OtherProjects />
    </>
  )
}

export default HomePage
