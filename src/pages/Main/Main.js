import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Testimonials,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  Services,
  Achievement,
} from "../../components";
import { headerData } from "../../data/headerData";
import BackgroundAnimation from "../../components/Common/BackgroundAnimation/BackgroundAnimation";

function Main() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>
      <BackgroundAnimation />
      <Navbar />
      <Landing />
      <About />
      <Experience />
      <Skills />
      {<Achievement />}
      <Projects />
      <Education />
      {<Services />}
      {<Testimonials />}
      {/* {<Blog />} */}
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
