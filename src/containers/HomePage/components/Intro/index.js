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

      <StyledButton bigVariant link={buttonLink} text={buttonText} />
    </IntroWrapper>
  )
}

export default Intro
