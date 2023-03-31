import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import SectionTitle from "../../../../components/sectionTitle"

import ProjectsContent from "./components/ProjectsContent"
import { ProjectFeatured, ProjectLink, ProjectsWrapper } from "./styled"

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
    <ProjectsWrapper id="projects">
      <SectionTitle>
        <span>03.</span>
        {projectsTitle}
      </SectionTitle>

      {projectsItems.map(
        ({ projectLink, projectImg, ...projectsContent }, index) => (
          <ProjectFeatured
            key={index}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <ProjectLink
              href={projectLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GatsbyImage image={getImage(projectImg)} alt={name} />
            </ProjectLink>

            <ProjectsContent {...projectsContent} />
          </ProjectFeatured>
        )
      )}
    </ProjectsWrapper>
  )
}

export default Projects
