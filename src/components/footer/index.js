import React from "react"

import { FooterContainer } from "./styled"

const Footer = ({ menuActive }) => {
  return (
    <FooterContainer style={{textAlign: 'center'}} menuActive={menuActive} id="footer">
      © {new Date().getFullYear()} &middot; Footer
    </FooterContainer>
  )
}

export default Footer
