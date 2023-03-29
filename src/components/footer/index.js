import React from "react"

import BranchIcon from "../../images/branch.svg"
import StarIcon from "../../images/star.svg"

import {
  FooterContainer,
  FooterLink,
  FooterLinkIcons,
  LinkIconsItem,
} from "./styled"

const Footer = ({ menuActive }) => {
  return (
    <FooterContainer
      style={{ textAlign: "center" }}
      menuActive={menuActive}
      id="footer"
    >
      <FooterLink
        href="https://github.com/bchiang7/v4"
        rel="noopener noreferrer"
        target="_blank"
      >
        <p>Designed & Built by Brittany Chiang</p>

        <FooterLinkIcons>
          <LinkIconsItem>
            <StarIcon /> 6 050
          </LinkIconsItem>

          <LinkIconsItem>
            <BranchIcon /> 2 861
          </LinkIconsItem>
        </FooterLinkIcons>
      </FooterLink>
    </FooterContainer>
  )
}

export default Footer
