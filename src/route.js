import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
import GalaxyHarajuku from "../pages/GalaxyHarajuku"

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home}></Route>
          <Route exact path="/galaxy-harajuku" component={GalaxyHarajuku}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;