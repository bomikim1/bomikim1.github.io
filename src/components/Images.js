import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Image = () => {

const data = useStaticQuery(graphql`

query {
    allFile(
        filter: 
        {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, 
        name: {nin: ["gatsby-icon", "gatsby-astronaut"]}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
                   ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`)

return (
    <div className="image-container">
            {data.allFile.edges.map ((image, key)=> (
                <Img key ={key}
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split('.')[0]}
                />
            ))}
        </div>
)

}

export default Image