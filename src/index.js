import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./store/state-provider";
import reducer, { initialState } from "./store/reducer";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3aDXeiwJqydr0Y1WeetApnUi5sJZY2mA",
  authDomain: "clone-73fa5.firebaseapp.com",
  projectId: "clone-73fa5",
  storageBucket: "clone-73fa5.appspot.com",
  messagingSenderId: "363079116973",
  appId: "1:363079116973:web:b9d6db8a1c9499b04afe24",
  measurementId: "G-SH3487F48M",
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
