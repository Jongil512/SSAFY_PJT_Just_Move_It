import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieSelect from './Components/Page/MovieSelect.jsx';
import MovieSelectLow from './Components/Page/MovieSelectLow.jsx';
import MovieDetail from './Components/Page/MovieDetial';
import MovieDetailLow from './Components/Page/MovieDetialLow.jsx';
import Pay from './Components/Page/Pay';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/movies' element={<MovieSelect />}></Route>
      <Route path='/movies/*' element={<MovieDetail />}></Route>
      <Route path='/low/movies' element={<MovieSelectLow />}></Route>
      <Route path='/low/movies/*' element={<MovieDetailLow />}></Route>
      <Route path='/movies/*/pay' element={<Pay />}></Route>
    </Routes>
    {/* <App /> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
