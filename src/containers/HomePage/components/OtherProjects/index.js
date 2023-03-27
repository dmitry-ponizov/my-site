import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import FolderIcon from "../../../../images/folder.svg"

import {
  ContentLink,
  ContentText,
  OtherProjectsContent,
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
          otherProjectsItems {
            description
            projectsLink
            projectsList
            title
          }
        }
      }
    }
  `)

  const { otherProjectsTitle, otherProjectsSubtitle, otherProjectsItems } =
    data.mdx.frontmatter

  return (
    <OtherProjectsWrapper>
      <OtherProjectsTitle>
        {otherProjectsTitle}
        {otherProjectsSubtitle}
      </OtherProjectsTitle>

      <OtherProjectsItems>
        {otherProjectsItems.map(
          ({ description, projectsLink, projectsList, title }, index) => (
            <OtherProjectsItem key={index}>
              <OtherProjectsIcons>
                <FolderIcon />
              </OtherProjectsIcons>

              <OtherProjectsContent>
                <ContentLink
                  href={projectsLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {title}
                </ContentLink>
                <ContentText>{description}</ContentText>
              </OtherProjectsContent>

              <OtherProjectsList>
                {projectsList.map((listItem, index) => (
                  <ProjectsListItem key={index}>{listItem}</ProjectsListItem>
                ))}
              </OtherProjectsList>
            </OtherProjectsItem>
          )
        )}
      </OtherProjectsItems>
    </OtherProjectsWrapper>
  )
}

export default OtherProjects
