import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieSelect from "./Components/Page/MovieSelect.jsx";
import MovieSelectLow from "./Components/Page/MovieSelectLow.jsx";
import MovieDetail from "./Components/Page/MovieDetial";
import MovieDetailLow from "./Components/Page/MovieDetialLow.jsx";
import Pay from "./Components/Page/Pay";
import PayLow from "./Components/Page/PayLow";
import Payend from "./Components/Page/Payend";
import PayendLow from "./Components/Page/PayendLow";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/movies" element={<MovieSelect />}></Route>
      <Route path="/movies/:movieCode" element={<MovieDetail />}></Route>
      <Route path="/low/movies" element={<MovieSelectLow />}></Route>
      <Route path="/low/movies/:movieCode" element={<MovieDetailLow />}></Route>
      <Route path="/movies/:movieCode/pay" element={<Pay />}></Route>
      <Route path="/low/movies/:movieCode/pay" element={<PayLow />}></Route>
      <Route path="/movies/:movieCode/payend" element={<Payend />}></Route>
      <Route
        path="/low/movies/:movieCode/payend"
        element={<PayendLow />}
      ></Route>
    </Routes>
    {/* <App /> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
