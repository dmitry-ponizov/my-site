import React from "react"

import CodepenIcon from "../../images/socials/codepen.svg"
import GithubIcon from "../../images/socials/github.svg"
import InstagramIcon from "../../images/socials/instagram.svg"
import LinkedinIcon from "../../images/socials/linkedin.svg"
import TwitterIcon from "../../images/socials/twitter.svg"

import { SocialLink, Socials, SocialsWrapper } from "./styled"

const LeftSidebar = ({ data }) => {
  const socialIcons = [
    { icon: <GithubIcon />, link: data.githubLink },
    { icon: <InstagramIcon />, link: data.instagramLink },
    { icon: <TwitterIcon />, link: data.twitterLink },
    { icon: <LinkedinIcon />, link: data.linkedinLink },
    { icon: <CodepenIcon />, link: data.codepenLink },
  ]

  return (
    <SocialsWrapper>
      <Socials>
        {socialIcons.map(
          ({ icon, link }, index) =>
            link && (
              <li key={index}>
                <SocialLink href={link} target="_blank">
                  {icon}
                </SocialLink>
              </li>
            )
        )}
      </Socials>
    </SocialsWrapper>
  )
}

export default LeftSidebar
