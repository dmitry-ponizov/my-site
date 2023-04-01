import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import StyledButton from "../../../../components/styledButton"

import OtherProjectsItem from "./components/OtherProjectsItem"
import {
  OtherProjectsItems,
  OtherProjectsTitle,
  OtherProjectsWrapper,
} from "./styled"

const OtherProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { section: { eq: "otherProjects" } }) {
        frontmatter {
          otherProjectsTitle
          otherProjectsCards {
            githubLink
            description
            cardsLink
            cardsList
            title
          }
        }
      }
    }
  `)

  const { otherProjectsTitle, otherProjectsCards } = data.mdx.frontmatter

  const [showProjects, setShowProjects] = useState(6)

  const isCropped = showProjects === 6

  const handleShowProjects = () => {
    setShowProjects(isCropped ? otherProjectsCards.length : 6)
  }

  return (
    <OtherProjectsWrapper>
      <OtherProjectsTitle
        id="jobs"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="true"
      >
        {otherProjectsTitle}
      </OtherProjectsTitle>

      <OtherProjectsItems>
        {otherProjectsCards.slice(0, showProjects).map((props, index) => (
          <OtherProjectsItem key={index} {...props} />
        ))}
      </OtherProjectsItems>

      <StyledButton
        bigVariant
        onClick={handleShowProjects}
        text={isCropped ? "Show more" : "Show less"}
      />
    </OtherProjectsWrapper>
  )
}

export default OtherProjects
