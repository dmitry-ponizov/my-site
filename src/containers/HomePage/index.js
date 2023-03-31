import React, { useEffect } from "react"
import AOS from "aos"

import About from "./components/About"
import Contact from "./components/Contact"
import Intro from "./components/Intro"
import Jobs from "./components/Jobs"
import OtherProjects from "./components/OtherProjects"
import Projects from "./components/Projects"

import "aos/dist/aos.css"

const HomePage = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Intro />

      <About />

      <Jobs />

      <Projects />

      <OtherProjects />

      <Contact />
    </>
  )
}

export default HomePage
