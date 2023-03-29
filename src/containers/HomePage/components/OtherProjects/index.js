import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import parse from "html-react-parser"

import StyledButton from "../../../../components/styledButton"
import FolderIcon from "../../../../images/folder.svg"
import ExternalIcon from "../../../../images/socials/external.svg"
import GithubIcon from "../../../../images/socials/github.svg"

import {
  ContentLink,
  ContentText,
  IconsList,
  IconsListLink,
  OtherProjectsIcons,
  OtherProjectsItem,
  OtherProjectsItems,
  OtherProjectsList,
  OtherProjectsTitle,
  OtherProjectsWrapper,
  ProjectsListItem,
} from "./style"

const OtherProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { section: { eq: "otherProjects" } }) {
        frontmatter {
          otherProjectsSubtitle
          otherProjectsTitle
          projectsButtonText
          projectsButtonLink
          otherProjectsCards {
            githubLink
            externalLink
            description
            cardsLink
            cardsList
            title
          }
        }
      }
    }
  `)

  const {
    otherProjectsTitle,
    otherProjectsSubtitle,
    projectsButtonText,
    projectsButtonLink,
    otherProjectsCards,
  } = data.mdx.frontmatter

  return (
    <OtherProjectsWrapper>
      <OtherProjectsTitle>
        {otherProjectsTitle}
        <Link to="/archive">{parse(otherProjectsSubtitle)}</Link>
      </OtherProjectsTitle>

      <OtherProjectsItems>
        {otherProjectsCards.map(
          (
            {
              description,
              cardsLink,
              cardsList,
              title,
              githubLink,
              externalLink,
            },
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

                  {externalLink && (
                    <li>
                      <IconsListLink
                        href={externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalIcon />
                      </IconsListLink>
                    </li>
                  )}
                </IconsList>
              </OtherProjectsIcons>

              <div>
                <ContentLink
                  href={cardsLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {title}
                </ContentLink>

                <ContentText>{parse(description)}</ContentText>
              </div>

              <OtherProjectsList>
                {cardsList.map((cardItem, index) => (
                  <ProjectsListItem key={index}>{cardItem}</ProjectsListItem>
                ))}
              </OtherProjectsList>
            </OtherProjectsItem>
          )
        )}
      </OtherProjectsItems>

      <StyledButton
        bigVariant
        link={projectsButtonLink}
        text={projectsButtonText}
      />
    </OtherProjectsWrapper>
  )
}

export default OtherProjects
