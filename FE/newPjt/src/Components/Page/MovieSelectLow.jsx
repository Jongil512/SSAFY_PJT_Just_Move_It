import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import Voice from "../AI/Voice";
import Pose from "../AI/Pose";

function MovieSelectLow() {
  return (
    <div className="MovieSelectLow">
      <h1>여기는 셀렉트로우</h1>
      <Link to="./1">
        <Button>영화 선택</Button>
      </Link>
      <Voice></Voice>
      <Pose></Pose>
    </div>
  );
}
export default MovieSelectLow;
