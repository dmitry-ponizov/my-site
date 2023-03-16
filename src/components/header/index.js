import React from "react"
import Burger from "@animated-burgers/burger-rotate"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import { useScrollDirection } from "../../hooks/useScrollDirection"
import HeaderLogo from "../../images/logo.svg"
import StyledButton from "../styledButton"

import { HeaderContainer, Navigation, Navlist, NavlistItem } from "./styled"

import "@animated-burgers/burger-rotate/dist/styles.css"

const Header = ({ menuActive, setMenuActive, data }) => {
  const { navListItems, buttonLink, buttonText } = data.frontmatter

  const { isTop, scrollDirection } = useScrollDirection()
  const isScrollDown = scrollDirection === "down"

  return (
    <HeaderContainer isTop={isTop} isScrollDown={isScrollDown}>
      <AnchorLink to="#intro">
        <HeaderLogo />
      </AnchorLink>

      <Navigation>
        <Navlist isOpen={menuActive}>
          {navListItems.map(({ name, anchor }, index) => (
            <NavlistItem onClick={() => setMenuActive(false)} key={index}>
              <AnchorLink to={anchor}>
                <span>0{index + 1}.</span>
                {name}
              </AnchorLink>
            </NavlistItem>
          ))}

          <StyledButton buttonLink={buttonLink} buttonText={buttonText} />
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
