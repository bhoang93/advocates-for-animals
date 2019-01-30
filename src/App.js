import React, { Component } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import News from "./Pages/News";
import AboutUs from "./Pages/AboutUs";

import Expertise from "./Pages/Expertise";
import Freedom from "./Components/Expertise/Freedom";
import Judicial from "./Components/Expertise/Judicial";
import LevelPlayingField from "./Components/Expertise/LevelPlayingField";
import Undercover from "./Components/Expertise/Undercover";
import AnimalProtectionLaw from "./Components/Expertise/AnimalProtectionLaw";

import Clients from "./Pages/Clients";
import Contact from "./Pages/Contact";
import Complaints from "./Pages/Complaints";

import FullBlogPost from "./Components/FullBlogPost";

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch(
      "https://public-api.wordpress.com/rest/v1.1/sites/advocates-for-animals.com/posts/"
    )
      .then(resp => resp.json())
      .then(data => this.setState({ posts: data.posts }));
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header />
          <main className="main-content">
            <Route
              exact
              path="/"
              render={() => <Home posts={this.state.posts} />}
            />
            <Route
              exact
              path="/blog"
              render={() => <News posts={this.state.posts} />}
            />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/expertise" component={Expertise} />
            <Route
              exact
              path="/expertise/freedom-of-information"
              component={Freedom}
            />
            <Route
              exact
              path="/expertise/judicial-review"
              component={Judicial}
            />
            <Route
              exact
              path="/expertise/achieving-a-level-playing-field"
              component={LevelPlayingField}
            />
            <Route
              exact
              path="/expertise/undercover-investigations"
              component={Undercover}
            />
            <Route
              exact
              path="/expertise/animal-protection-law"
              component={AnimalProtectionLaw}
            />

            <Route exact path="/clients" component={Clients} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/news/:id" component={FullBlogPost} />
            <Route exact path="/complaints" component={Complaints} />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
