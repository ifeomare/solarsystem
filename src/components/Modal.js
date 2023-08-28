import React, { useState } from "react";
import "./Modal.css";

export default function Modal({ closeModal }) {
  return (
    <>
      <article className="modal">
        <div className="overlay" onClick={() => closeModal(false)}></div>
        <section className="modal-content">
          <div className="mock-img">
            <img
              src="https://raw.githubusercontent.com/ifeomare/solarsystem/main/src/images/neptune.png"
              alt=""
              srcSet=""
            />
            <h2>Neptune</h2>
          </div>
          <div className="mock-text">
            <h2>Big Blue Planet</h2>
            <h3>Fast Facts</h3>
            <div className="my-text">
              <ol>
                <b>
                  <li>Moons: 14</li>
                  <li>Rings: 5</li>
                  <li>One Year: 60190 Earth Days</li>
                  <li>
                    Distance From The Sun:
                    <ul>
                      <li>2.795173960 miles</li>
                      <li>4.498396441 kilometers</li>
                    </ul>
                  </li>
                  <li>
                    Radius:
                    <ul>
                      <li>15299.4 miles</li>
                      <li>24622 kilometers</li>
                    </ul>
                  </li>
                  <li>Type: Ice Giant</li>
                </b>
              </ol>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

{
  /* <button className="close-modal" onClick={toggleModal}>
              close
            </button> */
}
