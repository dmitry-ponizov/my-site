import React from "react"

import { FooterContainer, FooterLink } from "./styled"

const Footer = ({ menuActive, footerLink, footerText }) => {
  return (
    <FooterContainer menuActive={menuActive} id="footer">
      <FooterLink href={footerLink} rel="noopener noreferrer" target="_blank">
        {footerText}
      </FooterLink>
    </FooterContainer>
  )
}

export default Footer
