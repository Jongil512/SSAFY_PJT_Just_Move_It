import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieSelect from "./Components/Page/MovieSelect.jsx";
import MovieSelectLow from "./Components/Page/MovieSelectLow.jsx";
import MovieDetail from "./Components/Page/MovieDetial";
import MovieDetailLow from "./Components/Page/MovieDetialLow.jsx";
import Pay from "./Components/Page/Pay";
import PayLow from "./Components/Page/PayLow";
import Payend from "./Components/Page/Payend";
import PayendLow from "./Components/Page/PayendLow";
import NotFound from "./Components/Page/NotFound";
import App from "./App";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/movies" element={<MovieSelect />}></Route>
        <Route path="/movies/:movieCode" element={<MovieDetail />}></Route>
        <Route path="/low/movies" element={<MovieSelectLow />}></Route>
        <Route
          path="/low/movies/:movieCode"
          element={<MovieDetailLow />}
        ></Route>
        <Route path="/movies/:movieCode/pay" element={<Pay />}></Route>
        <Route path="/low/movies/:movieCode/pay" element={<PayLow />}></Route>
        <Route
          path="/movies/:movieCode/pay/payend"
          element={<Payend />}
        ></Route>
        <Route
          path="/low/movies/:movieCode/pay/payend"
          element={<PayendLow />}
        ></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
