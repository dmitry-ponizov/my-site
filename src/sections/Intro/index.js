import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"

import StyledButton from "../../components/styledButton"

import { IntroWrapper } from "./styled"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { section: { eq: "intro" } }) {
        id
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
    <IntroWrapper>
      {parse(body)}

      <StyledButton bigVariant>
        <a href={buttonLink} target="_blank" rel="noreferrer">
          {buttonText}
        </a>
      </StyledButton>
    </IntroWrapper>
  )
}

export default Intro
