import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Images from "../components/Images"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Bomi Kim Portfolio" />
    <Header></Header>
    <Work></Work>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
