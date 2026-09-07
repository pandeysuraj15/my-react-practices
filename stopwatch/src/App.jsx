import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let id = 0;

    if (start) {
      id = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(id);
  }, [start]);

  const startTime = () => {
    setStart(true);
  };

  const resetTime = () => {
    setStart(false);
    setTime(0);
  };

  const pauseTime = () => {
    setStart(false);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <>
      <div className="app">
        <div className="stopwatch">
          <span className="label">STOPWATCH</span>

          <h1>{formatTime(time)}</h1>

          <span className="status">{start ? "RUNNING" : "PAUSED"}</span>
        </div>

        <div className="button-container">
          <button className="reset-btn" type="button" onClick={resetTime}>
            Reset
          </button>

          <button className="start-btn" type="button" onClick={startTime}>
            Start
          </button>

          <button className="pause-btn" type="button" onClick={pauseTime}>
            Pause
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
