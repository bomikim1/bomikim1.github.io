import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import aboutImage from "./images/profile.jpeg"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <p>
            {data.aboutImage}
          <img src={aboutImage} alt="about"/>
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
