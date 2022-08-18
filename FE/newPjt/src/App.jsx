// import logo from './logo.svg';
import React, { useState } from "react";

import "./App.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Router from "./Router";
import Face from "./Components/AI/Face";
import Pose from "./Components/AI/Pose";
// import $ from "jquery";
import { CompressOutlined } from "@mui/icons-material";

function App() {
  const [AppAge, setAge] = useState("0");
  const [AppGender, setGender] = useState("1");
  const [dirction, setDirction] = useState("1");
  const axios = require("axios").default;
  // const navigate = useNavigate();
  // const { navigation } = this.props;

  // const dh = 190;

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

  var timer = setInterval(function () {
    // console.log("Hello!!");
    axios
      .get("https://i7d207.p.ssafy.io/api/sensor")
      .catch(function (err) {
        console.log(err, "센서값 못받아옴");
      })
      .then(function (response) {
        // console.log(response.data.lengthValue);
        if (window.location.pathname == "/") {
          // console.log("아 응애");
          // navigation.navigate("default");
          // navigate("/default");
          if (response.data.lengthValue >= 150) {
            window.location.assign(window.location.href + "default");
          } else if (
            response.data.lengthValue < 150 &&
            100 < response.data.lengthValue
          ) {
            window.location.assign(window.location.href + "low");
          }
        }
      });
  }, 1000);

  /////////////////////////////////////////////////////////////

  const websocket = new WebSocket("wss://i7d207.p.ssafy.io/ws/socket");

  websocket.onmessage = onMessage;
  websocket.onopen = onOpen;
  websocket.onclose = onClose;

  function send() {
    let msg = document.getElementById("msg");

    console.log(msg.value);
    websocket.send(msg.value);
    msg.value = "";
  }

  //채팅창에서 나갔을 때
  function onClose(evt) {
    if (!isOpen(websocket)) return;
    websocket.send("퇴장");
  }

  //채팅창에 들어왔을 때
  function onOpen(evt) {
    if (!isOpen(websocket)) return;
    websocket.send("입장");
  }

  function onMessage(msg) {
    if (!isOpen(websocket)) return;

    var data = msg.data;
    var message = null;

    var data = msg.data;
    var message = null;

    //현재 세션에 로그인 한 사람
    message = data;
    console.log(message);
  }

  function isOpen(ws) {
    return ws.readyState === ws.OPEN;
  }

  /////////////////////////////////////////////////////////////

  return (
    <div className="App">
      <Router dirction={dirction} />
      {/* <h3>
        나이는 : {AppAge}, 성별은 : {AppGender}
      </h3>
      <h3>방향은 현재 {dirction} 을 가리키고 있다!</h3> */}

      {/* <Face setAge={setAge} setGender={setGender}></Face>
      <Pose setDirction={setDirction}></Pose> */}

      <div class="container">
        <div>
          <div id="msgArea" class="col"></div>
          <div class="col-6">
            <div class="input-group mb-3">
              <input
                type="text"
                id="msg"
                class="form-control"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-send"
                  onClick={send}
                >
                  전송
                </button>
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-send"
                  onClick={onMessage}
                >
                  받기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
