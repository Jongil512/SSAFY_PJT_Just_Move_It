import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";

function PersonButton(props) {
  function getVariant(data) {
    if (props.chosePerson === data) {
      return "contained";
    }
  }
  function setPersonData(data) {
    props.setPerson(data);
  }
  //   function setDisabled(){
  //     if()
  //   }

  return (
    <div>
      <h4>{props.text}</h4>
      <h4>{props.chosePerson}</h4>
      <ButtonGroup>
        <Button onClick={() => setPersonData(0)}>0</Button>
        <Button onClick={() => setPersonData(1)}>1</Button>
        <Button onClick={() => setPersonData(2)}>2</Button>
        <Button onClick={() => setPersonData(3)}>3</Button>
        <Button onClick={() => setPersonData(4)}>4</Button>
      </ButtonGroup>
    </div>
  );
}
export default PersonButton;
