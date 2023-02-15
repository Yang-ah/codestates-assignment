import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";

import rootRouter from "./router";

import "./App.css";
import "./global-style.css";

ReactDOM.render(
  <RouterProvider router={rootRouter} />,
  document.getElementById("root")
);
