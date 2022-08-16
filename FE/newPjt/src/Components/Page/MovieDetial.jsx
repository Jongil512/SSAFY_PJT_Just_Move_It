import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SeatData from "./SeatsData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MovieDetail() {
  // const axios = require("axios").default;
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

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  let juso = window.location.href.split("/");
  const movie_code = juso.slice(-1);
  let movie_data;
  // console.log(movie_code[0]);

  const [open, setOpen] = useState(false);
  const [seatInfo, setSeatInfo] = useState("11");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSeatData = (sData, e) => {
    console.log({ sData });
    setSeatInfo(sData);
  };

  const location = useLocation();
  const { from } = location.state;
  const state = location.state;

  // console.log(state["moviePlayingInfoList"]);
  let moviePlayingInfo = state["moviePlayingInfoList"];
  const timeButton = [];

  for (const info of moviePlayingInfo) {
    // console.log(info["tickets"]);
    const ticketsData = [];
    for (const ticket of info["tickets"]) {
      // console.log(ticket["seat"]);
      for (const seat of ticket["seat"].split(",")) {
        ticketsData.push(seat);
      }
    }
    ticketsData.sort();
    let k = "";
    for (const iterator of ticketsData) {
      k = k + iterator + ",";
    }
    // console.log(k);
    timeButton.push(
      <Button
        onClick={(e) => {
          handleSeatData(k, e);
        }}
      >
        {info["startTime"]}
      </Button>
    );
  }

  return (
    <div className="MovieDetail">
      <h1>여기는 디테일</h1>
      <Button onClick={goBack}>뒤로가기</Button>
      <br />
      <img src={state["img"]} alt="사진이 없어용 ㅠ" />
      <h2>{state["title"]}</h2>
      <span>평점 : {state["rating"]},</span>
      <span> 총 관객수 : {Number(state["totalCustomer"]) / 1000}</span>
      <span> 연령 : {state["ageLimit"].slice(0, 3)}</span>
      <h5>{state["summary"]}</h5>
      {timeButton}
      <div>
        <SeatData data={seatInfo} />
      </div>
      <div>
        <Button onClick={handleOpen}>좌석 선택</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1>여기는 모달이야!</h1>
            {/* <Link to='/pay'><Button>결제</Button></Link> */}
            <Link to="./pay">
              <Button>결제</Button>
            </Link>
            <Button onClick={handleClose}>취소</Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default MovieDetail;
