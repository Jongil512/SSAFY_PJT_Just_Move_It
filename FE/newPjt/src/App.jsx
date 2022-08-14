// import logo from './logo.svg';
import "./App.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import Voice from "./Components/AI/Voice";
import Pose from "./Components/AI/Pose";
import Router from "./Router";

import Face from "./Components/AI/Face";

function App() {
  return (
    <div className="App">
      {/* <div className="App-header">
        <Voice></Voice>
        <Pose></Pose>
      </div> */}
      <Router />
      <Face></Face>
    </div>
  );
}

export default App;
