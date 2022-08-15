import React from "react";
import Header from "../Elements/Header";
import Footer from "../Elements/Footer";
import LowRouter from "./LowRouter";

function LowPage(props) {
  return (
    <div className="LowPage">
      <Header />
      <Footer />
      <h1>여기는 로우 페이지</h1>
      <LowRouter />
    </div>
  );
}
export default LowPage;
