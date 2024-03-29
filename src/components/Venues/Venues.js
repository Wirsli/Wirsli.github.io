import React from "react";
import Ceremony from "./Ceremony";
import Party from "./Party";
import { Container } from "react-bootstrap";

const Venues = () => {
  return (
    <section id="venue" className="venue">
      <Container>
        <h1 className="text-center mt-3">Helyszín</h1>
        <Ceremony />
        <Party />
      </Container>
    </section>
  );
};

export default Venues;
