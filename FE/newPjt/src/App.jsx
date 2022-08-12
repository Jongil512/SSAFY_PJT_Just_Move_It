// import logo from './logo.svg';
import "./App.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Pose from "./Components/AI/Pose";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Pose></Pose>
        <Link to="./movies">
          <Button>평범한 ui로 이동하기</Button>
        </Link>
        <Link to="./low/movies">
          <Button>작은 ui로 이동하기</Button>
        </Link>
      </div>
    </div>
  );
}

export default App;
