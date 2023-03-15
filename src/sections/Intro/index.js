import React from "react"

import StyledLink from "../../components/styledLink"

import {
  FirstTitle,
  IntroButton,
  IntroText,
  IntroWrapper,
  SecondTitle,
  ThirdTitle,
} from "./styled"

const Intro = () => {
  return (
    <IntroWrapper>
      <FirstTitle>Hi, my name is</FirstTitle>

      <SecondTitle>Brittany Chiang.</SecondTitle>

      <ThirdTitle>I build things for the web.</ThirdTitle>

      <IntroText>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{" "}
        <StyledLink href="https://upstatement.com/">Upstatement</StyledLink>.
      </IntroText>

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
