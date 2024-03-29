import React from "react";
import Intro from "./Intro/Intro";
import Schedule from "./Schedule/Schedule";
import Venues from "./Venues/Venues";
import ResponseForm from "./ResponseForm/ResponseForm";
import Information from "./Information/Information";

const Content = () => {
  return (
    <div>
      <Intro />
      <Venues />
      <Schedule />
      {/* <Information /> */}
      <ResponseForm />
    </div>
  );
};

export default Content;
