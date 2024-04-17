import React from "react";
import { Ratio, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Party = () => {
  return (
    <Row className="venue-element">
      <Col lg={6} className="venue-body">
        <h2>Lakodalom</h2>
        <div className="venue-location">
          <FontAwesomeIcon icon={faLocationDot} />
          <div>
            <h5>Soós István Borászati Szakképző Iskola Tangazdasága</h5>
            <p className="text-uppercase small">Budapest 1221, Jósika u. 14.</p>
          </div>
        </div>
        <div>
          <h6>Parkolás</h6>
          <p>A tangazdaságon belül van lehetőség a parkolásra.</p>
        </div>
        <div>
          <h6>Tömegközlekedés</h6>
          <p>
            A legközelebb a 251, 251E, 251A Alkotmány utcai megállója esik. Az
            éjszakai járatok a Savoyai Jenő térről indulnak - 973 és 941-es
            busz.
          </p>
        </div>
      </Col>
      <Col lg={6} className="venue-map">
        <Ratio aspectRatio={"4x3"}>
          <iframe
            title="Budafok tangazdaság"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.9598877438516!2d19.023220576515385!3d47.432225500002545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741e770aad44e2b%3A0x697baa4336b6b3e3!2zU2_Ds3MgSXN0dsOhbiBCb3LDoXN6YXRpIFN6YWtrw6lwesWRIElza29sYSBUYW5nYXpkYXPDoWdh!5e0!3m2!1sen!2shu!4v1711488500824!5m2!1sen!2shu"
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

export default Party;
