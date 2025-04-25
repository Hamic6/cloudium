import React from "react";

import AppBar from "./AppBar";
import Introduction from "./Introduction";
import Demos from "./Demos";
import Testimonial from "./Testimonial";
import Integrations from "./Integrations";
import Features from "./Features";
import FAQ from "./FAQ"; // Import du composant FAQ
import JoinUs from "./JoinUs";

function Presentation() {
  return (
    <React.Fragment>
      <AppBar />
      <Introduction />
      <Demos />
      <Testimonial />
      <Integrations />
      <Features />
      <FAQ /> {/* Réintégration du composant FAQ */}
      <JoinUs />
    </React.Fragment>
  );
}

export default Presentation;
