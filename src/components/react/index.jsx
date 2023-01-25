import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom/client";
import DefaultComponent from "./assets/defaultComponent.jsx";

const getContainer = document.querySelector(".region-content");

function App() {
  return <DefaultComponent />;
}

if (getContainer) {
  const root = ReactDOM.createRoot(getContainer);
  document.body.classList.add("wp-5__reacted");
  root.render(<App />);
}
