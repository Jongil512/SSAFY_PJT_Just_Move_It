import React from "react";
import "./Header.css";

function Header(props) {
  // console.log(props.dir);
  return (
    <div className="Header">
      <div>
        <h1>{props.dir}</h1>
      </div>
    </div>
  );
}
export default Header;
