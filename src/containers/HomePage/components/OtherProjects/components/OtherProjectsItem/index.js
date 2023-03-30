import React from "react"
import parse from "html-react-parser"

import OtherProjectsIcons from "../OtherProjectsIcons"

import {
  OtherProjectsItem,
  OtherProjectsLink,
  OtherProjectsText,
  TechnologiesList,
  TechnologiesListItem,
} from "./styled"

const ProjectsItem = ({
  githubLink,
  cardsLink,
  title,
  description,
  cardsList,
}) => {
  return (
    <OtherProjectsItem>
      <OtherProjectsIcons githubLink={githubLink} cardsLink={cardsLink} />

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
          <TechnologiesListItem key={index}>{techItem}</TechnologiesListItem>
        ))}
      </TechnologiesList>
    </OtherProjectsItem>
  )
}

export default ProjectsItem
