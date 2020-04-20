import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import "./stylesheets/index.scss";
import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// SetTimeout simulates the loading of the website
setTimeout(function () {
  ReactDOM.render(
    <Provider store={createStore(reducers, composeEnhancers())}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}, 4000);
