import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { useScrollDirection } from "../../hooks/useScrollDirection"
import logo from "../../images/logo.svg"
import StyledButton from "../styledButton"

import { HeaderContainer, HeaderLogo, Navlist, NavlistItem } from "./styled"

const Header = () => {
  const { isTop, scrollDirection } = useScrollDirection()

  const isScrollDown = scrollDirection === "down"

  console.log(isTop)
  console.log(scrollDirection)

  const listItems = [
    { name: "About", anchor: "#footer" },
    { name: "Experience", anchor: "#footer" },
    { name: "Work", anchor: "#footer" },
    { name: "Contact", anchor: "#footer" },
  ]

  return (
    <HeaderContainer isTop={isTop} isScrollDown={isScrollDown}>
      <HeaderLogo src={logo} alt="logo" />

      <nav>
        <Navlist>
          {listItems.map(({ name, anchor }, index) => (
            <NavlistItem key={index}>
              <AnchorLink to={anchor}>
                <span>0{index + 1}.</span>
                {name}
              </AnchorLink>
            </NavlistItem>
          ))}

          <StyledButton fontSize="13px">
            <a
              href="https://brittanychiang.com/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </StyledButton>
        </Navlist>
      </nav>
    </HeaderContainer>
  )
}

export default Header
