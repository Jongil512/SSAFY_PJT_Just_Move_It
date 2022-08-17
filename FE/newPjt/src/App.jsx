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
  const axios = require("axios").default;
  // console.log("https://i7d207.p.ssafy.io/api/movies/" + movie_code[0]);
  // axios
  //   .get("https://i7d207.p.ssafy.io/api/movies/" + movie_code[0])
  //   .catch(function (err) {
  //     console.log(err, "default 데이터x");
  //   })
  //   .then(function (response) {
  //     // 성공 핸들링
  //     console.log(response.data);
  //     state = response.data;
  //   });
  // console.log(state);

  // var timer = setInterval(function () {
  //   // console.log("Hello!!");
  //   axios
  //     .get("https://i7d207.p.ssafy.io/api/sensor")
  //     .catch(function (err) {
  //       console.log(err, "센서값 못받아옴");
  //     })
  //     .then(function (response) {
  //       console.log(response.data);
  //     });
  // }, 1000);

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
