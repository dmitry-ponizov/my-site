import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"

import StyledButton from "../../../../components/styledButton"

import { ContactWrapper } from "./styled"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { section: { eq: "contact" } }) {
        body
        frontmatter {
          contactButtonLink
          contactButtonText
        }
      }
    }
  `)

  const {
    body,
    frontmatter: { contactButtonLink, contactButtonText },
  } = data.mdx

  return (
    <ContactWrapper>
      {parse(body)}

      <StyledButton
        bigVariant
        link={contactButtonLink}
        text={contactButtonText}
      />
    </ContactWrapper>
  )
}

export default Contact
