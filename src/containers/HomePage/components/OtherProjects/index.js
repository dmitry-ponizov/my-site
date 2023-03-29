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
      <OtherProjectsTitle>{otherProjectsTitle}</OtherProjectsTitle>

      <OtherProjectsItems>
        {otherProjectsCards
          .slice(0, showProjects)
          .map(({ ...otherProjectsItem }, index) => (
            <OtherProjectsItem key={index} {...otherProjectsItem} />
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
