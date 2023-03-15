import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"

import { IntroButton, IntroWrapper } from "./styled"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          body
          frontmatter {
            buttonLink
            buttonText
          }
        }
      }
    }
  `)

  const {
    body,
    frontmatter: { buttonLink, buttonText },
  } = data.allMdx.nodes[0]

  return (
    <IntroWrapper>
      {parse(body)}

      <IntroButton>
        <a href={buttonLink} target="_blank" rel="noreferrer">
          {buttonText}
        </a>
      </IntroButton>
    </IntroWrapper>
  )
}

export default Intro
