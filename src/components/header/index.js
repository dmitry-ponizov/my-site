import React from "react"
import Burger from "@animated-burgers/burger-rotate"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { useScrollDirection } from "../../hooks/useScrollDirection"
import logo from "../../images/logo.svg"
import StyledButton from "../styledButton"

import {
  HeaderContainer,
  HeaderLogo,
  Navigation,
  Navlist,
  NavlistItem,
} from "./styled"

import "@animated-burgers/burger-rotate/dist/styles.css"

const Header = ({ menuActive, setMenuActive }) => {
  const { isTop, scrollDirection } = useScrollDirection()
  const isScrollDown = scrollDirection === "down"

  const listItems = [
    { name: "About", anchor: "#footer" },
    { name: "Experience", anchor: "#footer" },
    { name: "Work", anchor: "#footer" },
    { name: "Contact", anchor: "#footer" },
  ]

  return (
    <HeaderContainer isTop={isTop} isScrollDown={isScrollDown}>
      <HeaderLogo src={logo} alt="logo" />

      <Navigation>
        <Navlist isOpen={menuActive}>
          {listItems.map(({ name, anchor }, index) => (
            <NavlistItem onClick={() => setMenuActive(false)} key={index}>
              <AnchorLink to={anchor}>
                <span>0{index + 1}.</span>
                {name}
              </AnchorLink>
            </NavlistItem>
          ))}

          <StyledButton>
            <a
              href="https://brittanychiang.com/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </StyledButton>
        </Navlist>

        <Burger
          isOpen={menuActive}
          onClick={() => setMenuActive(!menuActive)}
        />
      </Navigation>
    </HeaderContainer>
  )
}

export default Header
