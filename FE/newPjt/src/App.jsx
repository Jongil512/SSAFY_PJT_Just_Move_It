// import logo from './logo.svg';
import "./App.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import Router from "./Router";

import Face from "./Components/AI/Face";
import Pose from "./Components/AI/Pose";
import Voice from "./Components/AI/Voice";

function App() {
  return (
    <div className="App">
      <Router />
      <Face></Face>
      <Pose></Pose>
      <Voice></Voice>
    </div>
  );
}

export default App;
