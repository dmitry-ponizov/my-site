import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Footer from "../footer"
import Header from "../header"
import LeftSidebar from "../leftSidebar"
import RightSidebar from "../rightSidebar"

import { Main, Wrapper } from "./styled"

import "./reset.css"
import "./global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      header: mdx(frontmatter: { type: { eq: "header" } }) {
        frontmatter {
          navListItems {
            name
            anchor
          }
          buttonLink
          buttonText
        }
      }
      sidebars: mdx(frontmatter: { type: { eq: "sidebars" } }) {
        frontmatter {
          githubLink
          instagramLink
          twitterLink
          linkedinLink
          codepenLink
          email
        }
      }
      footer: mdx(frontmatter: { type: { eq: "footer" } }) {
        frontmatter {
          footerLink
          footerText
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

  const sidebarEmail = data.sidebars.frontmatter.email

  const { footerLink, footerText } = data.footer.frontmatter

  return (
    <Wrapper>
      <Header
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        siteTitle={data.site.siteMetadata?.title || `Title`}
        data={data.header}
      />

      <LeftSidebar data={data.sidebars.frontmatter} />

      <RightSidebar email={sidebarEmail} />

      <Main menuActive={menuActive}>{children}</Main>

      <Footer
        menuActive={menuActive}
        footerLink={footerLink}
        footerText={footerText}
      />
    </Wrapper>
  )
}

export default Layout
