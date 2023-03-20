import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import SectionTitle from "../../../../components/sectionTitle"

import { AboutWrapper, ContentWrapper, ImageWrapper } from "./styled"

const About = () => {
  return (
    <AboutWrapper>
      <SectionTitle>
        <span>01.</span>About Me
      </SectionTitle>

      <ContentWrapper>
        <div>
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>

          <p>
            Fast-forward to today, and I’ve had the privilege of working at{" "}
            <a href="https://us.mullenlowe.com/">an advertising agency</a>,{" "}
            <a href="https://starry.com/">a start-up</a>,{" "}
            <a href="https://www.apple.com/">a huge corporation</a>, and{" "}
            <a href="https://scout.camd.northeastern.edu/">
              a student-led design studio
            </a>
            . My main focus these days is building accessible, inclusive
            products and digital experiences at{" "}
            <a href="https://upstatement.com/">Upstatement</a> for a variety of
            clients.
          </p>

          <p>
            I also recently{" "}
            <a href="https://www.newline.co/courses/build-a-spotify-connected-app">
              launched a course
            </a>{" "}
            that covers everything you need to build a web app with the Spotify
            API using Node & React.
          </p>

          <p>Here are a few technologies I’ve been working with recently:</p>

          <ul>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Eleventy</li>
            <li>Node.js</li>
            <li>WordPress</li>
          </ul>
        </div>

        <ImageWrapper>
          <StaticImage src="../../../../images/me.png" alt="My photo" />
        </ImageWrapper>
      </ContentWrapper>
    </AboutWrapper>
  )
}

export default About
