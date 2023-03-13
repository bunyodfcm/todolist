import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./companent/app/App";
import WorkContext from "./context/Work-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WorkContext>
      <App />
    </WorkContext>
  </React.StrictMode>
);
