import React from "react"
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
  OtherProjectsList,
  OtherProjectsText,
  OtherProjectsTitle,
  OtherProjectsWrapper,
  ProjectsListItem,
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

  return (
    <OtherProjectsWrapper>
      <OtherProjectsTitle>{otherProjectsTitle}</OtherProjectsTitle>

      <OtherProjectsItems>
        {otherProjectsCards.map(
          ({ description, cardsLink, cardsList, title, githubLink }, index) => (
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

              <OtherProjectsList>
                {cardsList.map((cardItem, index) => (
                  <ProjectsListItem key={index}>{cardItem}</ProjectsListItem>
                ))}
              </OtherProjectsList>
            </OtherProjectsItem>
          )
        )}
      </OtherProjectsItems>

      <StyledButton bigVariant text="Show More" />
    </OtherProjectsWrapper>
  )
}

export default OtherProjects
