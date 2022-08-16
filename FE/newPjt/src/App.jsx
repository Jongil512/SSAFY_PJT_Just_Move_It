// import logo from './logo.svg';
import React, { useState } from "react";

import "./App.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Router from "./Router";
import Face from "./Components/AI/Face";
import Pose from "./Components/AI/Pose";

function App() {
  const [AppAge, setAge] = useState("0");
  const [AppGender, setGender] = useState("1");
  const [dirction, setDirction] = useState("1");
  return (
    <div className="App">
      <Router dirction={dirction} />
      {/* <h3>
        나이는 : {AppAge}, 성별은 : {AppGender}
      </h3>
      <h3>방향은 현재 {dirction} 을 가리키고 있다!</h3> */}

      {/* <Face setAge={setAge} setGender={setGender}></Face>
      <Pose setDirction={setDirction}></Pose> */}
    </div>
  );
}

export default App;
