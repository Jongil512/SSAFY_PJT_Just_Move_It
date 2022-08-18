import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Payend() {
  return (
    <div className="Payend">
      <h1>결제가 완료되었습니다</h1>
      <a href="/">
        <Button>첫 화면으로</Button>
      </a>
      {/* <Link to="/">
      </Link> */}
    </div>
  );
}
export default Payend;
