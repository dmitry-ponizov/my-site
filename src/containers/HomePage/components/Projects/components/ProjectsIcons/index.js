import React from "react"

import ExternalIcon from "../../../../../../images/socials/external.svg"
import GithubIcon from "../../../../../../images/socials/github.svg"

import { IconsItem, IconsLink, ProjectIcons } from "./styled"

const ProjectsIcons = ({ githubLink, projectLink }) => {
  const icons = [
    {
      link: githubLink,
      icon: <GithubIcon />,
    },

    {
      link: projectLink,
      icon: <ExternalIcon />,
    },
  ]
  return (
    <ProjectIcons>
      {icons.map(({ link, icon }, index) => (
        <IconsItem key={index}>
          <IconsLink href={link} rel="noopener noreferrer" target="_blank">
            {icon}
          </IconsLink>
        </IconsItem>
      ))}
    </ProjectIcons>
  )
}

export default ProjectsIcons
