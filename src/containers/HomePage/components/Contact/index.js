import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import StyledButton from "../../../../components/styledButton"

import {
  ContactText,
  ContactTitle,
  ContactWrapper,
  СontactNumberTitle,
} from "./styled"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { section: { eq: "contact" } }) {
        frontmatter {
          numberTitle
          contactTitle
          contactText
          contactButtonLink
          contactButtonText
        }
      }
    }
  `)

  const {
    frontmatter: {
      numberTitle,
      contactTitle,
      contactText,
      contactButtonLink,
      contactButtonText,
    },
  } = data.mdx

  return (
    <ContactWrapper
      id="contact"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
      data-aos-delay="300"
    >
      <СontactNumberTitle>{numberTitle}</СontactNumberTitle>

      <ContactTitle>{contactTitle}</ContactTitle>

      <ContactText>{contactText}</ContactText>

      <StyledButton
        bigVariant
        link={contactButtonLink}
        text={contactButtonText}
      />
    </ContactWrapper>
  )
}

export default Contact
