import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Voice from "./Components/AI/Voice";
function MovieSelectLow() {
  return (
    <div className="MovieSelectLow">
      <h1>여기는 셀렉트로우</h1>
      <Link to="./1">
        <Button>영화 선택</Button>
      </Link>
      <Voice />
    </div>
  );
}
export default MovieSelectLow;
