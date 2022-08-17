import React from "react";
import Header from "../Elements/Header";
import Footer from "../Elements/Footer";
import DefaultRouter from "./DefaultRouter";

function DefaultPage(props) {
  // console.log(props.data);

  return (
    <div className="DefaultPage">
      <Header dir={props.data["dirction"]} />
      <h1>여기는 디폴트 페이지</h1>
      <DefaultRouter />
      <Footer />
    </div>
  );
}
export default DefaultPage;
