// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
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
//       </header>
//     </div>
//   );
// }

// export default App;

import React, {StyleSheet, useState} from 'react'
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
  {id: 1, img:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/un8ZDtx2SMwNwXRYy65aItnNjab.jpg', title:'토르', descript: '토르의 내용이라는 내용'},
  {id: 2, img:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/odxdUZWZ7fBfy3ZRj063wuJnZvo.jpg', title:'토르1', descript: '토르1의 내용이라는 내용'},
  {id: 3, img:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1heBUD8o0sgdqLWyeXkylR2POKb.jpg', title:'토르2', descript: '토르2의 내용이라는 내용'},
  {id: 4, img:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/p9ZUzCyy9wRTDuuQexkQ78R2BgF.jpg', title:'토르3', descript: '토르3의 내용이라는 내용'}
];


// let movies = [
//   {id: 1, movie_name:'토르:러브 앤 썬더', movie_seats:[a1,a2,a3,a4,a5,b1,b2,b3,b4,b5],movie_descript:'어쩌구 저쩌구' , poster_path:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/un8ZDtx2SMwNwXRYy65aItnNjab.jpg'}
// ];

// let slides = [
//   <img  src={data[0].img} alt="1" />,
//   <img  src={data[1].img} alt="3" />  ,
//   <img  src={data[2].img} alt="4" />  ,
//   <img  src={data[3].img} alt="2" />  ,
// ];

let slides = [
  // <Card>
  //   <CardContent>
  //     <CardMedia component='img' image='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/un8ZDtx2SMwNwXRYy65aItnNjab.jpg'></CardMedia>
  //     <Typography>토오오오오르으으응</Typography>
  //   </CardContent>
  // </Card>,
  // <Card>
  //   <CardContent>
  //     <CardMedia component='img' image='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1heBUD8o0sgdqLWyeXkylR2POKb.jpg'></CardMedia>
  //     <Typography>토오오오오르으으응 아님</Typography>
  //   </CardContent>
  // </Card>,
  // <Card>
  //   <CardContent>
  //     <CardMedia component='img' image='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/p9ZUzCyy9wRTDuuQexkQ78R2BgF.jpg'></CardMedia>
  //     <Typography>토오오오오르으으응</Typography>
  //   </CardContent>
  // </Card>,
  // <Card>
  //   <CardContent>
  //     <CardMedia component='img' image='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/odxdUZWZ7fBfy3ZRj063wuJnZvo.jpg'></CardMedia>
  //     <Typography>토오오오오르으으응 아님</Typography>
  //   </CardContent>
  // </Card>,
  ];
  

  for (const object of data.data){
    slides.push(
    <Card>
      <CardContent>
        <CardMedia component='img' image={object['img']}>
        </CardMedia>
      </CardContent>
    </Card>,)
  }


// <img src="https://picsum.photos/800/304/?random" alt="5" />   

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

const callback = function(index){
  // console.log("callback",slides[index].props.children.props.children[1].props.children);
  console.log({slides})
}

// const carousel_movies = function(){
//   return(
//     for (const object of this.data){
//       <Card>
//         <CardContent>
//           <CardMedia component='img' image={object[image]}>
//           </CardMedia>
//         </CardContent>
//       </Card>
//     }
//   )
// }


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