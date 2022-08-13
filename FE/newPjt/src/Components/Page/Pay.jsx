import React from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Pay() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="Pay">
      <h1>여기는 결제창 입니다</h1>
      {/* <Link to='/movies'></Link> */}
      <Button onClick={goBack}>결제 취소하기</Button>
      <Link to="./payend">결제 완료</Link>
    </div>
  );
}
export default Pay;
