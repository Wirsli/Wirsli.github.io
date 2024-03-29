import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChurch,
  faMugHot,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const Schedule = () => {
  return (
    <section id="schedule" className="schedule">
      <Container>
        <h1 className="text-center text-white">Menetrend</h1>
        <div className="timeline">
          <div className="timeline-row">
            <div className="timeline-time">
              15:30<small>Július 20</small>
            </div>
            <div className="timeline-content">
              <FontAwesomeIcon icon={faChurch} />
              <h4>Templomi szertartás</h4>
              <p>Hamarosan bővül...</p>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-time">
              18:00<small>Július 20</small>
            </div>
            <div className="timeline-content">
              <FontAwesomeIcon icon={faMugHot} />
              <h4>Vendégvárás kezdete</h4>
              <p>Hamarosan bővül...</p>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-content">
              <FontAwesomeIcon icon={faUtensils} />
              <h4>Hamarosan bővül...</h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Schedule;
