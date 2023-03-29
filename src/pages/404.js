import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1
      style={{ paddingTop: "300px", fontSize: "32px", paddingBottom: "15px" }}
    >
      404: Not Found
    </h1>
    <Link style={{ color: "#64ffda" }} to="/">
      Go back to Home Page
    </Link>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
