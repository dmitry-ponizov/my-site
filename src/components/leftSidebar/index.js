import React from "react"

import CodepenIcon from "../../images/socials/codepen.svg"
import GithubIcon from "../../images/socials/github.svg"
import InstagramIcon from "../../images/socials/instagram.svg"
import LinkedinIcon from "../../images/socials/linkedin.svg"
import TwitterIcon from "../../images/socials/twitter.svg"

import { SocialLink, Socials, SocialsWrapper } from "./styled"

const LeftSidebar = () => {
  const socialIcons = [
    { icon: <GithubIcon />, link: "https://github.com/bchiang7" },
    { icon: <InstagramIcon />, link: "https://www.instagram.com/bchiang7" },
    { icon: <TwitterIcon />, link: "https://twitter.com/bchiang7" },
    { icon: <LinkedinIcon />, link: "https://www.linkedin.com/in/bchiang7/" },
    { icon: <CodepenIcon />, link: "https://codepen.io/bchiang7" },
  ]
  return (
    <SocialsWrapper>
      <Socials>
        {socialIcons.map(({ icon, link }, index) => (
          <li key={index}>
            <SocialLink href={link} target="_blank">
              {icon}
            </SocialLink>
          </li>
        ))}
      </Socials>
    </SocialsWrapper>
  )
}

export default LeftSidebar
