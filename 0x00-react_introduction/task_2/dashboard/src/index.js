import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Notifications from "./Notifications";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootNotifications = document.getElementById("root-notifications");
ReactDOM.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

reportWebVitals();
