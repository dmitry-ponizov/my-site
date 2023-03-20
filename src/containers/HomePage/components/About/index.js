import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import SectionTitle from "../../../../components/sectionTitle"

import { AboutWrapper, Content, ImageWrapper } from "./styled"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { section: { eq: "about" } }) {
        body
        frontmatter {
          aboutTitle
          aboutImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const {
    body,
    frontmatter: { aboutTitle, aboutImage },
  } = data.mdx

  const introImage = getImage(aboutImage)

  return (
    <AboutWrapper>
      <SectionTitle>
        <span>01.</span>
        {aboutTitle}
      </SectionTitle>

      <Content>
        <div>{parse(body)}</div>

        <ImageWrapper>
          <GatsbyImage image={introImage} alt="Avatar" />
        </ImageWrapper>
      </Content>
    </AboutWrapper>
  )
}

export default About
