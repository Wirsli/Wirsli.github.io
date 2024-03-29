import React from "react";
import { Container } from "react-bootstrap";

const ResponseForm = () => {
  return (
    <section id="response-form">
      <Container>
        <h1 className="text-center">Visszajelzés</h1>
        <div className="form">
          <iframe
            title="Respond form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdgW4Lc4xINBKj_y51r7g-uVjAVuqeSgT5VxinjScS0Q64Wuw/viewform?embedded=true"
          >
            Betöltés…
          </iframe>
        </div>
      </Container>
    </section>
  );
};

export default ResponseForm;
