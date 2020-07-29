import React from "react";
import "jquery";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas, faMapMarkedAlt);

function App() {
  return (
    <>
      <NavBar />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Layout>
            <Route path="/About" component={About} />
            <Route path="/Services" component={Services} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Careers" component={Careers} />
            <Route path="/Contact" component={Contact} />
          </Layout>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
