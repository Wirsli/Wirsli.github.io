import React from "react";
import { Row, Col, Ratio } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Ceremony = () => {
  return (
    <Row className="venue-element">
      <Col lg={6} className="venue-body">
        <h2>Szertartás</h2>
        <div className="venue-location">
          <FontAwesomeIcon icon={faLocationDot} />
          <div>
            <h5>Kispesti Nagyboldogasszony templom</h5>
            <p className="text-uppercase small">
              Budapest 1191, Templom tér 21.
            </p>
          </div>
        </div>
        <div>
          <h6>Parkolás</h6>
          <p>
            Autóval a Batthyányi utcáról vagy a Templom térre lehet fordulni,
            vagy a Kisfaludy utcáról nyíló parkoló lehet alkalmas. A környéken a
            parkolás ingyenes.
          </p>
          <h6>Tömegközlekedés</h6>
          <p>
            A közelben áll meg a Határ útról induló 50-es és a 42-es villamos,
            valamint a Kőbánya-Kispestről induló 151, 148, 68-as számú busz.
          </p>
        </div>
      </Col>
      <Col lg={6} className="venue-map">
        <Ratio aspectRatio={"4x3"}>
          <iframe
            title="Nagyboldogasszony-templom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1907.6380470128518!2d19.144091322154562!3d47.454689824880234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c2e62c04aa0b%3A0xb1ef88d2d1459797!2sNagyboldogasszony-templom!5e0!3m2!1sen!2shu!4v1711487975381!5m2!1sen!2shu"
            width="600"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Ratio>
      </Col>
    </Row>
  );
};

export default Ceremony;
