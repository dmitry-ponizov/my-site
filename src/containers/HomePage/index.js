import React from "react"

import About from "./components/About"
import Intro from "./components/Intro"
import Jobs from "./components/Jobs"
import OtherProjects from "./components/OtherProjects"
import Projects from "./components/Projects"

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
