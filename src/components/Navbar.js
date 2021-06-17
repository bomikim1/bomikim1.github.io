import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Link } from "gatsby"


const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            className="name"
            tabIndex={0}
            >
            <Link to="/">
            Bomi Kim.
            </Link>
          </div>
          <div className="links-wrapper">
            <Link to="/"><button>Work</button></Link>
            <Link to="/about"><button>About</button></Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
