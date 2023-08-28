import React from "react";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
// import UseEffectSec from "./UseEffectSec";
import "./index.css";
import PlanetList from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<PlanetList />);
