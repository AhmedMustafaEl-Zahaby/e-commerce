import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ShopProvider from "./Contexts/ShopContext";

ReactDOM.render(
  <ShopProvider>
    <App />
  </ShopProvider>,
  document.getElementById("root")
);
