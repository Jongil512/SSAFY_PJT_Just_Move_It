import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";

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
  const navigate = useNavigate();
  // const axios = require("axios").default;

  const goBack = () => {
    navigate(-1);
  };

  let juso = window.location.href.split("/");
  const movie_code = juso.slice(-1);
  // console.log(movie_code[0]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log("https://i7d207.p.ssafy.io/api/movies/" + movie_code[0]);
  // axios
  //   .get("https://i7d207.p.ssafy.io/api/movies/" + movie_code[0])
  //   .catch(function (err) {
  //     console.log(err, "movies 데이터x");
  //   })
  //   .then(function (response) {
  //     // 성공 핸들링
  //     console.log(response.data);
  //     const info_data = response.data;
  //   });
  // console.log(state);
  const location = useLocation();
  // const { from } = location.state;
  const state = location.state;
  // console.log(state);

  return (
    <div className="MovieDetail">
      <h1>여기는 디테일</h1>
      <h2>{state["title"]}</h2>
      <Button onClick={goBack}>뒤로가기</Button>

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
