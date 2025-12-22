import {useState,useEffect} from "react";




function TimerWidget() {

const [time, setTime] = useState(25);
const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
  if (!isRunning) return;

  const timer = setInterval(() => {
    setTime(prev => {
      if (prev === 0) {
        setIsRunning(false);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [isRunning]);

    return (
          <div className="Timer__container">
           <h1>Promodro Timer</h1>
          <div className="Timer">
               <h1>{time}</h1>
          </div>

          <div className="controls">
  <button onClick={() => setIsRunning(true)}>Start</button>
  <button onClick={() => setIsRunning(false)}>Pause</button>
  <button onClick={() => setTime(25)}>Reset</button>
          </div>
      </div>
    )
     
}


export default TimerWidget;








// export default TimerWidget ;