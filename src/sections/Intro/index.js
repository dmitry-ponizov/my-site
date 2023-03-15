import React from "react"

import StyledLink from "../../components/styledLink"

import { IntroButton, IntroWrapper } from "./styled"

const Intro = () => {
  return (
    <IntroWrapper>
      <h1>Hi, my name is</h1>

      <h2>Brittany Chiang.</h2>

      <h3>I build things for the web.</h3>

      <p>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{" "}
        <StyledLink href="https://upstatement.com/">Upstatement</StyledLink>.
      </p>

      <IntroButton>
        <a
          href="https://brittanychiang.com/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Check out my course!
        </a>
      </IntroButton>
    </IntroWrapper>
  )
}

export default Intro
