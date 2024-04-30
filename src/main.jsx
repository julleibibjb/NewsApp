import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";

import App from "./App";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { NewsApi } from "./api/NewSlice";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
