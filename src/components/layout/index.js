import React from "react"
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

  return (
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <Main>{children}</Main>

      <Footer />
    </Wrapper>
  )
}

export default Layout
