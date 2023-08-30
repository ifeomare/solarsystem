import React from "react";
import NavBar from "../components/NavBar";
import FunFacts from "../components/FunFacts";
import "./facts.css";

function Facts() {
  return (
    <>
      <NavBar link1={"no"} link2={"yes"} />
      <article id="facts">
        <FunFacts />
      </article>
    </>
  );
}

export default Facts;
