import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Carousel } from "3d-react-carousal";

const axios = require("axios").default;
const slide = [];
const movies = [];

// function getMovieData() {}

axios
  .get("https://i7d207.p.ssafy.io/api/movies")
  .catch(function (err) {
    console.log(err, "movies 데이터x");
  })
  .then(function (response) {
    // 성공 핸들링
    console.log(response.data);
    const info_data = response.data;

    // <img src={movieData["img"]} alt="이미지 없어용ㅠ" />,
    // <h1>{movieData["title"]}</h1>,
    // <Link to={"./" + movieData["movieCode"]} state={movieData}>
    //   <Button>영화 선택</Button>
    // </Link>

    //   <Typography variant="body2" color="text.secondary">
    //   Lizards are a widespread group of squamate reptiles, with over
    //   6,000 species, ranging across all continents except Antarctica
    // </Typography>
    // <Button size="small">Share</Button>
    // <Button size="small">Learn More</Button>

    for (const movieData of info_data) {
      slide.push(
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={movieData["img"]}
            alt="이미지 없어용 ㅠ"
          />
        </Card>
      );
      movies.push(movieData);
    }
    // for (const iterator of info_data) {
    //   slides.push(<img src={iterator["img"]}></img>);
    //   text_data.push(<h1>{iterator["title"]}</h1>);
    // }
  });

function MovieSelect() {
  const callback = function (index) {
    // console.log(index);
    // console.log(movies[index]);
    movieCode(movies[index].movieCode);
    movieTitlef(movies[index].title);
    movieRatef(movies[index].rating);
    movieTotalCustomerf(movies[index].totalCustomer);
    movieAgef(movies[index].ageLimit);
    movieDataAllf(movies[index]);
  };

  let [movieCodeUrl, movieCodeChange] = useState("0");
  let [movieTitle, movieTitleChange] = useState("0");
  let [movieRate, movieRateChange] = useState("0");
  let [movieTotalCustomer, movieTotalCustomerChange] = useState("0");
  let [movieAge, movieAgeChange] = useState("0");
  let [movieDataAll, movieDataAllChange] = useState("0");
  // console.log(movieDataAll);

  const movieCode = (inputData) => {
    movieCodeChange(inputData);
  };
  const movieTitlef = (inputData) => {
    movieTitleChange(inputData);
  };
  const movieRatef = (inputData) => {
    movieRateChange(inputData);
  };
  const movieTotalCustomerf = (inputData) => {
    movieTotalCustomerChange(inputData);
  };
  const movieAgef = (inputData) => {
    movieAgeChange(inputData);
  };
  const movieDataAllf = (inputData) => {
    movieDataAllChange(inputData);
  };

  return (
    <div className="MovieSelect">
      {/* <Pose></Pose> */}
      {/* <Voice></Voice> */}
      <Carousel
        slides={slide}
        arrows={false}
        autoplay={false}
        interval={1000}
        onSlideChange={callback}
      />
      <h1>{movieTitle}</h1>
      <span> {movieAge}</span>
      <span>{movieRate}</span>
      <span> {movieTotalCustomer}명</span>
      <br></br>
      {/* <Link
        to={{
          pathname: "./" + movieCodeUrl,
          state: {
            movie: movieDataAll,
          },
        }}
      > */}
      <Link to={"./" + movieCodeUrl} state={movieDataAll}>
        <Button>영화 선택</Button>
      </Link>
    </div>
  );
}

export default MovieSelect;
