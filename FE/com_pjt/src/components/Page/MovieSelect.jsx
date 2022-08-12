import React, { useRef, useState } from "react";
import { Carousel } from '3d-react-carousal';
import { Link, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';


let movie_title



// const axios = require('axios').default;

// axios.get('https://i7d207.p.ssafy.io/api/movies')
//   .catch(function(err){
//     console.log(err,'axios 안되누 ㅡ')
//   })
//   .then(function (response) {
//     // 성공 핸들링
//     console.log(response.data);
//     info_data = response.data
//     for (const iterator of info_data) {

//       slides.push(<img src={ iterator['img'] }></img>)
//       text_data.push(<h1>{iterator['title']}</h1>)
//     }
//   })



function MovieSelect(props) {
  
  // let { urlData } = movieCode
  // const dispatch = useDispatch()
  // urlData = 0
  
  // console.log(moviesState.movies)
  
  const movieTitle = useRef(null)
  // const movieCode = useRef(null)
  let movieCode = '81888'
  let slides = [];
  let text_data = []
  // let [movieCodeData, changeMovieCode] = useState('0')
  const moviesState = useSelector( (state) => state );
  
  for (const iterator of moviesState.movies) {
    
    slides.push(<img src={ iterator['img'] }></img>)
    text_data.push( iterator['title'] )
  }
  

  const callback = function(index){
    movieTitle.current.innerText = text_data[index]
    movieCode = moviesState.movies[index]['movieCode']
    console.log(1,movieCode)
    // console.log(movieCode)
    // movieCode.current.innerText = movieCode
    // console.log(movieCodeData)
    // changeMovieCode(movieCode)
    // movieCodeData = movieCode
    // ()=>{changeMovieCode({movieCodeData})
    // changeMovieCode({movieCode})
    // console.log(2,movieCodeData)
  }
  
  // console.log(movie_code)

  // console.log(text_data)
  
  // var bMovieCode = movieCode.bind();

  return (
    <div className='MovieSelect'>

      <Carousel slides={slides} arrows={false} autoplay={false} interval={1000} onSlideChange={ callback }/>
  
      <div>
        <h1 ref={ movieTitle }></h1>

          {/* <button>영화 선택</button> */}
        <Link to={'./'+ movieCode}>
          <Button color="secondary">
            영화 선택
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default MovieSelect;