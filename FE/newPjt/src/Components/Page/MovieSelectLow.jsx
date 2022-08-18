import React, { useState } from "react";
import { Button, Card, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { Carousel } from "3d-react-carousal";

const axios = require("axios").default;
const slide = [];
const movies = [];

axios
  .get("https://i7d207.p.ssafy.io/api/movies")
  .catch(function (err) {
    // console.log(err, "movies 데이터x");
  })
  .then(function (response) {
    // 성공 핸들링
    // console.log(response.data);
    const info_data = response.data;

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
  });

function MovieSelect() {
  const callback = function (index) {
    console.log(index);
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
    <div className="MovieSelectLow">
      <h1>now playing</h1>
      <div className="container rows">
        <div className="row">
          <div className="colrum-2"></div>
          <div className="colrum-8">
            <Carousel
              slides={slide}
              arrows={false}
              autoplay={false}
              interval={1000}
              onSlideChange={callback}
            />
          </div>
          <div className="colrum-2"></div>
        </div>
        <div className="row">
          <h1>{movieTitle}</h1>
        </div>
        <div className="row">
          <span> {movieAge}</span>
          <span>{movieRate}</span>
          <span> {movieTotalCustomer}명</span>
        </div>
        <br></br>
        <div className="row">
          <Link to={"./" + movieCodeUrl} state={movieDataAll}>
            <Button>영화 선택</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieSelect;
