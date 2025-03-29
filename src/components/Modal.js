import React from "react";
import FastFacts from "./FastFacts";
import "./Modal.css";

export default function Modal({ closeModal, planet }) {
  return (
    <>
      <article className="modal">
        <div className="overlay"></div>
        <section className="modal-content">
          <div className="mock-img">
            <img
              src={`https://raw.githubusercontent.com/ifeomare/solarsystem/main/src/images/solarsystem-images/${planet.toLowerCase()}.png`}
              alt=""
              srcSet=""
            />
            <h2>{planet}</h2>
          </div>
          <div className="mock-text">
            <p onClick={() => closeModal(false)}>&#10006;</p>
            <FastFacts key={planet} props={planet} />
          </div>
        </section>
      </article>
    </>
  );
}
