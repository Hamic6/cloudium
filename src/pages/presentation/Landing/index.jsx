import React from "react";

import AppBar from "./AppBar";
import Introduction from "./Introduction";
import Offres from "./Offres";
import Testimonial from "./Testimonial";
import Integrations from "./Integrations";
import Features from "./Features";
import FAQ from "./FAQ";
import JoinUs from "./JoinUs";

function Presentation() {
  return (
    <React.Fragment>
      <AppBar />
      <Introduction />
      <Offres />
      <Testimonial />
      <Integrations />
      <Features />
      <FAQ />
      <JoinUs />
    </React.Fragment>
  );
}

export default Presentation;
