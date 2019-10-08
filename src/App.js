//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ReactDOM from "react-dom";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeLionsScore, updatedhomeLionsScore] = useState(32);
  const [awayTigersScore, updatedawayTigersScore] = useState(32);

  // const [minutes, setMinutes] = useState(15);
  // const [seconds, setSeconds] = useState(0o0);

  // setTimeout(() => {
  //   if (seconds > 0o0 || seconds < 59){
  //     setSeconds(seconds - 1)
  //   } else if (seconds === 0o0){
  //     setMinutes(minutes - 1)
  //     setSeconds(59)
  //   } else if (seconds === 0o0 || minutes === 0o0){
  //     setMinutes(14);
  //     setSeconds(0o0);
  //   }
  // }, 1000);
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            {/* <div className="home__score">32</div> */}
            <div className="home__score">{homeLionsScore}</div>
          </div>
          
          {/* <div className="timer">{minutes}:{seconds}</div> */}
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            {/* <div className="away__score">32</div> */}
            <div className="away__score">{awayTigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* <button className="homeButtons__touchdown">Home Touchdown</button>
          <button className="homeButtons__fieldGoal">Home Field Goal</button> */}
          <button onClick = {() => updatedhomeLionsScore(homeLionsScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() => updatedhomeLionsScore(homeLionsScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {() => updatedawayTigersScore(awayTigersScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => updatedawayTigersScore(awayTigersScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}


export default App;

const container = document.getElementById("root");
ReactDOM.render(<App />, container);
