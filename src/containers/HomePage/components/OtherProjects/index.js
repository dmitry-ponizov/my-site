import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import parse from "html-react-parser"

import StyledButton from "../../../../components/styledButton"
import FolderIcon from "../../../../images/folder.svg"
import ExternalIcon from "../../../../images/socials/external.svg"
import GithubIcon from "../../../../images/socials/github.svg"

import {
  IconsList,
  IconsListLink,
  OtherProjectsIcons,
  OtherProjectsItem,
  OtherProjectsItems,
  OtherProjectsLink,
  OtherProjectsText,
  OtherProjectsTitle,
  OtherProjectsWrapper,
  TechnologiesList,
  TechnologiesListItem,
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
          .map(
            (
              { description, cardsLink, cardsList, title, githubLink },
              index
            ) => (
              <OtherProjectsItem key={index}>
                <OtherProjectsIcons>
                  <FolderIcon />

                  <IconsList>
                    {githubLink && (
                      <li>
                        <IconsListLink
                          href={githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GithubIcon />
                        </IconsListLink>
                      </li>
                    )}

                    {cardsLink && (
                      <li>
                        <IconsListLink
                          href={cardsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalIcon />
                        </IconsListLink>
                      </li>
                    )}
                  </IconsList>
                </OtherProjectsIcons>

                <OtherProjectsLink
                  href={cardsLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {title}
                </OtherProjectsLink>

                <OtherProjectsText>{parse(description)}</OtherProjectsText>

                <TechnologiesList>
                  {cardsList.map((techItem, index) => (
                    <TechnologiesListItem key={index}>
                      {techItem}
                    </TechnologiesListItem>
                  ))}
                </TechnologiesList>
              </OtherProjectsItem>
            )
          )}
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
