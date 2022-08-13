import React from "react";
import { Button, Modal, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

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
  // const movie_code = window.location.href
  // console.log(movie_code)
  // console.log(window.location.href.slice[-1])

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  let juso = window.location.href.split("/");
  const movie_code = juso.slice(-1);
  console.log(movie_code);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="MovieDetail">
      <h1>여기는 디테일</h1>
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
