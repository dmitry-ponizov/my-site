import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div style={{ height: "5000px", paddingTop: "150px" }}>Main</div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
