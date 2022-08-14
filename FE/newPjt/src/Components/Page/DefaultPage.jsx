import React from "react";
import Header from "../Elements/Header";
import Footer from "../Elements/Footer";
import DefaultRouter from "./DefaultRouter";

function DefaultPage() {
  return (
    <div className="DefaultPage">
      <Header />
      <h1>여기는 디폴트 페이지</h1>
      <DefaultRouter />
      <Footer />
    </div>
  );
}
export default DefaultPage;
