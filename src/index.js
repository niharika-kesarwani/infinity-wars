import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ProductProvider, useProduct } from "./contexts/product-context";
export { useProduct };

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </StrictMode>,
  rootElement
);
