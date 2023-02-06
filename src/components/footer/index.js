import React from "react"

import { FooterContainer } from "./styled"

const Footer = ({ menuActive }) => {
  return (
    <FooterContainer menuActive={menuActive} id="footer">
      © {new Date().getFullYear()} &middot; Footer
    </FooterContainer>
  )
}

export default Footer
