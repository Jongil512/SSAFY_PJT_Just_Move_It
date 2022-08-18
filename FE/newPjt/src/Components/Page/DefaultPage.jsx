import React from "react";
import Header from "../Elements/Header";
import Footer from "../Elements/Footer";
import DefaultRouter from "./DefaultRouter";

function DefaultPage(props) {
  // console.log(props.data);

  return (
    <div className="DefaultPage">
      <Header dir={props.data["dirction"]} />
      <DefaultRouter />
      <Footer />
    </div>
  );
}
export default DefaultPage;
