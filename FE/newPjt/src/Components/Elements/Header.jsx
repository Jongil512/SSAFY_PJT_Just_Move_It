import React from "react";

function Header(props) {
  // console.log(props.dir);
  return (
    <div className="Header">
      <h1>{props.dir}</h1>
    </div>
  );
}
export default Header;
