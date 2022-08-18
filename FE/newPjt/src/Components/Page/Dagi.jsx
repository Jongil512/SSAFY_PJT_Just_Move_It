import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./Dagi.css";

function Dagi() {
  return (
    <div className="Dagi">
      <div>
        <img src="img/logo1.png" className="main"></img>
      </div>
      <Link to="./default">
        <Button>평범한 ui로 이동하기</Button>
      </Link>
      <Link to="./low">
        <Button>작은 ui로 이동하기</Button>
      </Link>
    </div>
  );
}
export default Dagi;
