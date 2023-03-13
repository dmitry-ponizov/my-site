import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Footer from "../footer"
import Header from "../header"

import { Main, Wrapper } from "./styled"

import "./reset.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = null
    }
  }, [menuActive])

  return (
    <Wrapper>
      <Header
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />

      <Main menuActive={menuActive}>{children}</Main>

      <Footer menuActive={menuActive} />
    </Wrapper>
  )
}

export default Layout
