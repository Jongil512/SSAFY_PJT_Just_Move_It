import React from "react";
import { Button } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Pay() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state;
  const seatList = [];
  let classification = "";
  for (const iterator of state.seats.selectedSeats) {
    // console.log(iterator);
    // a.push(Number(iterator));
    const a = parseInt(iterator / 5);
    const b = iterator % 5;
    let seat = "";
    switch (a) {
      case 0:
        seat = seat + "A";
        break;
      case 1:
        seat = seat + "B";
        break;
      case 2:
        seat = seat + "C";
        break;
      case 3:
        seat = seat + "D";
        break;

      default:
        break;
    }
    seat = seat + `0${b}`;
    seatList.push(seat);
  }
  seatList.sort();
  // console.log(seatList);
  let seatTicket = "";
  for (const iterator of seatList) {
    seatTicket += iterator + ",";
  }
  console.log(seatTicket.slice(0, -1));
  // console.log(a);
  // a.sort();
  // console.log(a);
  // let a = Object.assign(state.seats.selectedSeats);
  // a.sort();
  // console.log(a);

  for (let index = 0; index < state.adult.defaultPerson; index++) {
    classification += "ADULT,";
  }
  for (let index = 0; index < state.child.kisPerson; index++) {
    classification += "KIDS,";
  }
  console.log(classification);

  // * state.adult.defaultPerson;
  // "KIDS," * state.child.kisPerson;
  const goBack = () => {
    navigate(-1);
  };

  function cost() {
    return (
      <div>
        {/* <h1>영화: {state["movie"]}</h1> */}
        {/* <h2>성인: {props.adult} 명</h2>
        <h2>청소년: {props.child} 명</h2>
        <hr />
        <h3>총게 : {15000 * props.adult + 10000 * props.child}</h3> */}
      </div>
    );
  }
  function ticketPost() {
    console.log("아 응애");
    // var form = document.createElement('form');
    // form.setAttribute('method', 'post')
    // form.setAttribute('action', 'https://i7d207.p.ssafy.io/api/tickets')
  }
  return (
    <div className="Pay">
      <h1>여기는 디폴트 결제창 입니다</h1>
      {/* <Link to='/movies'></Link> */}
      {/* <h1>{props.movie}</h1> */}
      {/* <div>
        <h2>성인: {state.adult} 명</h2>
        <h2>청소년: {state.child} 명</h2>
        <hr />
        <h3>총게 : {15000 * state.adult + 10000 * state.child}</h3>
      </div> */}
      <h1>{state["movie"]}</h1>
      <h2>성인: {state.adult.defaultPerson} 명</h2>
      <h2>청소년: {state.child.kisPerson} 명</h2>
      <h4>좌석 : {seatTicket.slice(0, -1)}</h4>
      <hr />
      <h3>
        총계 :
        {15000 * state.adult.defaultPerson + 10000 * state.child.kisPerson}
      </h3>

      <Button onClick={goBack}>결제 취소하기</Button>
      <Link onClick={ticketPost} to="./payend">
        결제 완료
      </Link>
    </div>
  );
}
export default Pay;
