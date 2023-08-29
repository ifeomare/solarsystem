import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlanetList from "./App";
import Facts from "./pages/Facts";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlanetList />,
  },
  {
    path: "/fun-facts",
    element: <Facts />,
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
