import React, { useEffect, useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import Burger from "@animated-burgers/burger-squeeze"
import { globalHistory } from "@reach/router"
import { useMenuState } from "@szhsin/react-menu"
import { Link } from "gatsby"
import { useScrollDirection } from "hooks/useScrollDirection"

import CookiesBanner from "../cookiesBanner"

import { FlexContainer } from "components"
import ArrowDown from "images/arrow-down.inline.svg"
import NuevaCodeLogoDefault from "images/nuevacode-logo.svg"
import NuevaCodeLogoWhite from "images/nuevacode-logo-combined.svg"
import { Container } from "./../Layout/styled"
import {
  ControlledMenuContainer,
  HeaderContainer,
  HeaderLogo,
  HeaderWrapper,
  MenuArrow,
  MenuItemContainer,
  MenuItemDescription,
  MenuItemImage,
  MenuItemTitle,
  Navigation,
  NavListLink,
  NavSubListLink,
} from "./styled"

import "@animated-burgers/burger-squeeze/dist/styles.css"
import "@szhsin/react-menu/dist/index.css"
import "@szhsin/react-menu/dist/transitions/slide.css"

const Header = ({ location, data }) => {
  const { isTop, scrollDirection } = useScrollDirection()
  const [menuProps, toggleMenu] = useMenuState({ transition: true })
  const [isNotInitialEntry, setIsNotInitialEntry] = useState(undefined)
  const ref = useRef(null)
  const isScrollDown = scrollDirection === "down"
  const isTransparent =
    location.pathname === "/" ||
    location.pathname.includes("/services") ||
    location.pathname.includes("/cookie-policy")

  useEffect(() => {
    setIsNotInitialEntry(localStorage.getItem("isInitialEntry"))
  }, [])

  const styles = useSpring({
    from: {
      opacity:
        isTransparent && isNotInitialEntry
          ? 1
          : isTransparent && !isNotInitialEntry
          ? 0
          : 1,
    },
    to: {
      opacity: 1,
    },
    delay: 2000,
  })

  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
    const html = document.querySelector("html")

    if (menuActive) {
      html.style.overflow = "hidden"
    } else {
      html.style.overflow = "auto"
    }
  }, [menuActive])

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") setMenuActive(false)
    })
  }, [setMenuActive])

  const logo =
    isTop && isTransparent
      ? menuActive
        ? NuevaCodeLogoDefault
        : NuevaCodeLogoWhite
      : NuevaCodeLogoDefault

  return (
    <animated.div style={styles}>
      <HeaderContainer
        isTop={isTop}
        isTransparent={isTransparent}
        isScrollDown={isScrollDown}
        isOpen={menuActive}
      >
        <Container>
          <HeaderWrapper
            isOpen={menuActive}
            isTop={isTop}
            isTransparent={isTransparent}
          >
            <Link to="/" style={{ lineHeight: 0 }}>
              <HeaderLogo src={logo} alt="NuevaCode" />
            </Link>

            <Navigation isOpen={menuActive}>
              <li>
                <NavListLink to="/" activeClassName="active">
                  Home
                </NavListLink>
              </li>

              <li>
                <NavListLink
                  to=""
                  onClick={e => e.preventDefault()}
                  ref={ref}
                  onPointerEnter={() => toggleMenu(true)}
                >
                  Services
                  <MenuArrow open={menuProps.state}>
                    <ArrowDown />
                  </MenuArrow>
                </NavListLink>

                <ControlledMenuContainer
                  {...menuProps}
                  anchorRef={ref}
                  align={"center"}
                  offsetY={20}
                  onPointerEnter={() => toggleMenu(true)}
                  onPointerLeave={() => toggleMenu(false)}
                  onClose={() => toggleMenu(false)}
                >
                  {data.serviceItems.map(
                    ({ slug, title, img: { file }, desc: { desc }, id }) => (
                      <MenuItemContainer key={id}>
                        <NavSubListLink to={`/services/${slug}`}>
                          <MenuItemImage src={file.url} alt={title} />

                          <FlexContainer
                            flexDirection="column"
                            style={{ flex: 1 }}
                          >
                            <MenuItemTitle>{title}</MenuItemTitle>

                            <MenuItemDescription>{desc}</MenuItemDescription>
                          </FlexContainer>
                        </NavSubListLink>
                      </MenuItemContainer>
                    )
                  )}
                </ControlledMenuContainer>
              </li>

              <li>
                <NavListLink to="/contact-us" activeClassName="active">
                  Contact Us
                </NavListLink>
              </li>
            </Navigation>
            <Burger
              isOpen={menuActive}
              onClick={() => setMenuActive(!menuActive)}
            />
          </HeaderWrapper>
        </Container>
      </HeaderContainer>
      <CookiesBanner />
    </animated.div>
  )
}

export default Header
