import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./Context/context";
import { FilterProvider } from "./Context/filter-context";
import { MyGameProvider } from "./Context/mygames_context";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <FilterProvider>
        <MyGameProvider>
          <App />
        </MyGameProvider>
      </FilterProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
