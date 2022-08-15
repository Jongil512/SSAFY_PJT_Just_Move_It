// import logo from './logo.svg';
import "./App.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import Router from "./Router";

import Face from "./Components/AI/Face";
import Pose from "./Components/AI/Pose";

function App() {
  return (
    <div className="App">
      <Router />
      <Face></Face>
      <Pose></Pose>
    </div>
  );
}

export default App;
