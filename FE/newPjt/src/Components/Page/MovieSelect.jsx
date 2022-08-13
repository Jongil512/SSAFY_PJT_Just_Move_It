import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Pose from "../AI/Pose";
import Voice from "../AI/Voice";

function MovieSelect() {
  return (
    <div className="MovieSelect">
      <Pose></Pose>
      <Voice></Voice>
      <h1>여기는 무비 셀렉트</h1>
      <Link to="./1">
        <Button>영화 선택</Button>
      </Link>
    </div>
  );
}

export default MovieSelect;
