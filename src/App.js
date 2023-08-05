import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { ThemeContext } from "./contexts/ThemeContext";
import { Main, BlogPage, ProjectPage } from "./pages";
import { Skills, Education, Experience, Achievement, Services, Testimonials } from "./components";

import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  console.log("%cBHASKAR KUMAR", `color:${theme.primary}; font-size:50px`);
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          {/* <Route path="/blog" exact component={BlogPage} /> */}
          <Route path="/#projects" exact component={ProjectPage} />
          <Route path="/#skills" exact component={Skills} />
          <Route path="/#education" exact component={Education} />
          <Route path="/#experience" exact component={Experience} />
          <Route path="/#achievement" exact component={Achievement} />
          <Route path="/#services" exact component={Services} />
          <Route path="/#testimonials" exact component={Testimonials} />

          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
