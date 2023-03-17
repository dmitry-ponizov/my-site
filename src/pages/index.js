import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HomePage from "../containers/HomePage"

const IndexPage = () => (
  <Layout>
    <HomePage />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
