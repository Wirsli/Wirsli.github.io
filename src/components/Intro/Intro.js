import React from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <section id="home" className="intro">
      <div className="intro-overlay">
        <Container className="intro-body">
          <h1 className="text-center display-1 text-white">
            Viola <small>és</small> Attila
          </h1>
          <h2 className="text-white">2024. 07. 20.</h2>
          <p className="text-white mt-3 text-center lead">
            Üdvözlünk az esküvői weboldalunkon! Ez az oldal arra szolgál, hogy
            megosszuk veletek az esküvőnk részleteit, és segítsen nektek
            tervezni az utazást és az itt töltött időt.
          </p>
          <Button
            href="#response-form"
            variant="secondary"
            className="response-button"
            size="md"
          >
            <div className="d-flex align-items-center">
              <div className="pe-1">Ugrás a visszajelzéshez</div>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </Button>
        </Container>
      </div>
    </section>
  );
};

export default Intro;
