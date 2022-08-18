import { Button } from "@mui/material";
import React from "react";
import "./Payend.css"
import { Link } from "react-router-dom";

function Payend() {
  return (
    <div className="Payend">
      <h1>결제가 완료되었습니다!</h1>
      <a href="/">
        <button id="home">처음으로</button>
      </a>
      {/* <Link to="/">
      </Link> */}
    </div>
  );
}
export default Payend;
