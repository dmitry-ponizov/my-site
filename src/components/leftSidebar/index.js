import React from "react"

import CodepenIcon from "../../images/socials/codepen.svg"
import GithubIcon from "../../images/socials/github.svg"
import InstagramIcon from "../../images/socials/instagram.svg"
import LinkedinIcon from "../../images/socials/linkedin.svg"
import TwitterIcon from "../../images/socials/twitter.svg"

import { SocialLink, Socials, SocialsList, SocialsWrapper } from "./styled"

const LeftSidebar = ({ data }) => {
  const socialIcons = [
    { icon: <GithubIcon />, link: data.githubLink },
    { icon: <InstagramIcon />, link: data.instagramLink },
    { icon: <TwitterIcon />, link: data.twitterLink },
    { icon: <LinkedinIcon />, link: data.linkedinLink },
    { icon: <CodepenIcon />, link: data.codepenLink },
  ]

  return (
    <Socials
      data-aos="new-animation"
      data-aos-delay="1500"
      data-aos-duration="800"
    >
      <SocialsWrapper>
        <SocialsList>
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
        </SocialsList>
      </SocialsWrapper>
    </Socials>
  )
}

export default LeftSidebar
