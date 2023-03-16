import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../sections/about"
import Intro from "../sections/Intro"

const IndexPage = () => (
  <Layout>
    <Intro />

    <About />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
