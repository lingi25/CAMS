import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from "./routers/CartContext";
import { BrowserRouter as Router } from "react-router-dom";
import Cart from "./routers/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
    <Router>
      <App />
    </Router>
    </CartProvider>
  </React.StrictMode>
);
// CAMS