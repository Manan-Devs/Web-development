import { useEffect, useState } from "react";

function PomodoroTimer() {
  const [time, setTime] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning && time > 0) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsRunning(false);
    }

    return () => clearInterval(timerId);
  }, [isRunning, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="Timer_Container">
      <h1>Pomodoro Timer</h1>

      <h2 className="Timer">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h2>
       
       <div className="controls">
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={() => setTime(25 * 60)}>Reset</button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
