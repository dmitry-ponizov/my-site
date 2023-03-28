import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import SectionTitle from "../../../../components/sectionTitle"
import ExternalIcon from "../../../../images/socials/external.svg"
import GithubIcon from "../../../../images/socials/github.svg"

import {
  IconsItem,
  IconsLink,
  ProjectContent,
  ProjectFeatured,
  ProjectIcons,
  ProjectLink,
  ProjectsWrapper,
  ProjectText,
  TechItem,
  TechList,
  TitleLink,
  TitleName,
} from "./styled"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { section: { eq: "projects" } }) {
        body
        frontmatter {
          projectsItems {
            projectLink
            name
            text
            projectLink
            techList
            githubLink
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
          { techList, name, projectLink, text, projectImg, githubLink },
          index
        ) => (
          <ProjectFeatured key={index}>
            <ProjectLink
              href={projectLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GatsbyImage image={getImage(projectImg)} alt={name} />
            </ProjectLink>

            <ProjectContent>
              <h3>
                <TitleName>Featured Project</TitleName>
                <TitleLink
                  href={projectLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {name}
                </TitleLink>
              </h3>

              <ProjectText>{parse(text)}</ProjectText>

              <TechList>
                {techList.map((listItem, index) => (
                  <TechItem key={index}>{listItem}</TechItem>
                ))}
              </TechList>

              <ProjectIcons>
                <IconsItem>
                  <IconsLink
                    href={githubLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <GithubIcon />
                  </IconsLink>
                </IconsItem>

                <IconsItem>
                  <IconsLink
                    href={projectLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalIcon />
                  </IconsLink>
                </IconsItem>
              </ProjectIcons>
            </ProjectContent>
          </ProjectFeatured>
        )
      )}
    </ProjectsWrapper>
  )
}

export default Projects
