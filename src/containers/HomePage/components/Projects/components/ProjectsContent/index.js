import React from "react"
import parse from "html-react-parser"

import ProjectsIcons from "../ProjectsIcons"

import {
  ProjectContent,
  ProjectText,
  TechItem,
  TechList,
  TitleLink,
  TitleName,
} from "./styled"

const ProjectsContent = ({ projectLink, text, githubLink, techList, name }) => {
  return (
    <ProjectContent>
      <h3>
        <TitleName>Featured Project</TitleName>
        <TitleLink href={projectLink} rel="noopener noreferrer" target="_blank">
          {name}
        </TitleLink>
      </h3>

      <ProjectText>{parse(text)}</ProjectText>

      <TechList>
        {techList.map((listItem, index) => (
          <TechItem key={index}>{listItem}</TechItem>
        ))}
      </TechList>

      <ProjectsIcons githubLink={githubLink} projectLink={projectLink} />
    </ProjectContent>
  )
}

export default ProjectsContent
