import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChurch,
  faBreadSlice,
  faUtensils,
  faCakeCandles,
  faMusic,
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
              <p>
                A szertartást követően szeretettel várjuk a gratulációkat, majd
                elkészítjük a csoportfotókat is.
              </p>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-time">17:00</div>
            <div className="timeline-content">
              <FontAwesomeIcon icon={faBreadSlice} />
              <h4>Vendégvárás kezdete</h4>
              <p>
                A tangazdaság 17 órától fogadja a kedves vendégeket, de nem
                szükséges sietni. Aki hoz ajándékot, az kérjük itt adja át.
              </p>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-time">19:00</div>
            <div className="timeline-content">
              <FontAwesomeIcon icon={faUtensils} />
              <h4>Vacsora</h4>
              <p>Ezután a nyitótánc következik, majd megkezdődik a buli.</p>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-time">23:00</div>
            <div className="timeline-content">
              <FontAwesomeIcon icon={faCakeCandles} />
              <h4>Torta majd menyecsketánc</h4>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-content">
              <FontAwesomeIcon icon={faMusic} />
              <h4>Mulatás hajnalig...</h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Schedule;
