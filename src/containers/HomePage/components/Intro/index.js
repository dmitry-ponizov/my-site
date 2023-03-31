import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"

import StyledButton from "../../../../components/styledButton"

import { IntroWrapper } from "./styled"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { section: { eq: "intro" } }) {
        body
        frontmatter {
          buttonLink
          buttonText
        }
      }
    }
  `)

  const {
    body,
    frontmatter: { buttonLink, buttonText },
  } = data.mdx

  return (
    <IntroWrapper id="intro">
      {parse(body)}

      <div
        data-aos="fade-up"
        data-aos-delay="800"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <StyledButton bigVariant link={buttonLink} text={buttonText} />
      </div>
    </IntroWrapper>
  )
}

export default Intro
