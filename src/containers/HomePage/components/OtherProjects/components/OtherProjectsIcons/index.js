import React from "react"

import FolderIcon from "../../../../../../images/folder.svg"
import ExternalIcon from "../../../../../../images/socials/external.svg"
import GithubIcon from "../../../../../../images/socials/github.svg"

import { IconsList, IconsListLink, OtherProjectsIcon } from "./styled"

const OtherProjectsIcons = ({ githubLink, cardsLink }) => {
  return (
    <OtherProjectsIcon>
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
    </OtherProjectsIcon>
  )
}

export default OtherProjectsIcons
