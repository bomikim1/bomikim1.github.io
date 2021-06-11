import React from "react"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ghkv from '../images/gh-kv.jpeg'

const GalaxyHarajukuPage = () => (
    <Layout>
    <SEO title="[Galaxy Mobile Japan] Galaxy Harajuku Online Project" />
    <div className="section">
      <div className="container">
      <img src={ghkv} alt="view of galaxy harajuku offline store"/>
        <div className="headline-container">
          <Fade bottom cascade>
            <h1>Galaxy Harajuku Online Project</h1>
          </Fade>
          <Fade bottom>
            <p>2020.04 - 2020.09</p>
          </Fade>
        </div>
      </div>
    </div>
  </Layout>
    
)


export default GalaxyHarajukuPage