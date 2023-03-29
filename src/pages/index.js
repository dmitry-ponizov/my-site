import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Loader from "../components/loader"
import Seo from "../components/seo"
import HomePage from "../containers/HomePage"

const IndexPage = () => {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const isVisitedBefore = localStorage.getItem("visitedBefore")

    if (isVisitedBefore) {
      setShowLoader(false)
    } else {
      localStorage.setItem("visitedBefore", true)
      setTimeout(() => {
        setShowLoader(false)
      }, 4000)
    }
  }, [])

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <Layout>
          <HomePage />
        </Layout>
      )}
    </>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
