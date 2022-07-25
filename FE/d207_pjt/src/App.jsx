// import logo from './logo.svg';
// import './App.css';
// import { Link } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <h1>보이니?</h1>
//       {/* <nav
//         style={{
  //           borderBottom: "solid 1px",
  //           paddingBottom: "1rem",
  //         }}
  //       >
  //         <Link to="/invoices">Invoices</Link> |{" "}
  //         <Link to="/expenses">Expenses</Link>
//       </nav> */}
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import { Outlet, Link } from "react-router-dom";

// export default function App() {
//   return (
//     <div>
//       {/* <h1>Bookkeeper</h1> */}
      
//       <nav
//         style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem",
//         }}
//       >
//         <Link to="/invoices">Invoices</Link> |{" "}
//         <Link to="/expenses">Expenses</Link>
//       </nav>
//       <Outlet />

//     </div>
//   );
// }
import React, {StyleSheet, useState} from 'react'
import { StackedCarousel } from 'react-stacked-carousel'
// import 'react-stacked-carousel/dist/index.css';
// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Carousel} from '3d-react-carousal';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

let data = [
  {id: 1, img:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/un8ZDtx2SMwNwXRYy65aItnNjab.jpg'},
  {id: 2, img:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/odxdUZWZ7fBfy3ZRj063wuJnZvo.jpg'},
  {id: 3, img:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1heBUD8o0sgdqLWyeXkylR2POKb.jpg'},
  {id: 4, img:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/p9ZUzCyy9wRTDuuQexkQ78R2BgF.jpg'}
];

let slides = [
  <img  src={data[0].img} alt="1" />,
  <img  src={data[1].img} alt="3" />  ,
  <img  src={data[2].img} alt="4" />  ,
  <img  src={data[3].img} alt="2" />  ,
  // <img src="https://picsum.photos/800/304/?random" alt="5" />   
  ];

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

const callback = function(index){
  console.log("callback",index);
}

const App = () => {
  const [card, setCard] = useState(null);
  const onCardChange = (event) => {
    console.log("Card", event);
  }

  return (
    <div>
      <Carousel slides={slides} autoplay={false} interval={1000} onSlideChange={callback}/>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
        <button><p>영화 선택</p></button>  
      </Grid>
    </div>
  )
}
export default App