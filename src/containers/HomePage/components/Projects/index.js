import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import SectionTitle from "../../../../components/sectionTitle"
import ExternalIcon from "../../../../images/socials/external.svg"
import GithubIcon from "../../../../images/socials/github.svg"

import {
  ListItem,
  ProjectContent,
  ProjectFeatured,
  ProjectLink,
  ProjectList,
  ProjectsWrapper,
  ProjectText,
  ProjectTitle,
  TechList,
} from "./styled"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { section: { eq: "projects" } }) {
        body
        frontmatter {
          projectsItems {
            projectLink
            title
            nameLink
            name
            text
            projectLink
            techList
            githubLink
            externalLink
            projectImg {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          projectsTitle
        }
      }
    }
  `)

  const { projectsItems, projectsTitle } = data.mdx.frontmatter

  return (
    <ProjectsWrapper>
      <SectionTitle>
        <span>03.</span>
        {projectsTitle}
      </SectionTitle>

      {projectsItems.map(
        (
          {
            techList,
            nameLink,
            name,
            title,
            projectLink,
            text,
            projectImg,
            externalLink,
            githubLink,
          },
          index
        ) => (
          <ProjectFeatured key={index}>
            <ProjectLink
              href={projectLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GatsbyImage image={getImage(projectImg)} alt="Project" />
            </ProjectLink>

            <ProjectContent>
              <ProjectTitle>
                <span>{title}</span>
                <a href={nameLink} rel="noopener noreferrer" target="_blank">
                  {name}
                </a>
              </ProjectTitle>

              <ProjectText>{parse(text)}</ProjectText>

              <TechList>
                {techList.map((listItem, index) => (
                  <li key={index}>{listItem}</li>
                ))}
              </TechList>

              <ProjectList>
                <ListItem>
                  <a
                    href={githubLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                </ListItem>

                <ListItem>
                  <a
                    href={externalLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalIcon />
                  </a>
                </ListItem>
              </ProjectList>
            </ProjectContent>
          </ProjectFeatured>
        )
      )}
    </ProjectsWrapper>
  )
}

export default Projects
