import { useState , useRef } from 'react'
import './App.css'

function App() {
     
    const [time , setTime] = useState(0);
    const intervalIdRef = useRef(null);
      function handleStart() {
          if(intervalIdRef.current !== null) {
               return;
          }

          intervalIdRef.current =  setInterval(() => {
               setTime((time) => time + 1);
           },1000);
    }

     function handleStop() {
             clearInterval(intervalIdRef.current);
     }

     function handleReset() {
         clearInterval(intervalIdRef.current);
         setTime(0);
     }

    return (
      <>
        <h1>StopWatch: {time}</h1>

        <div>
           <button onClick={handleStart}>Start</button>
           <button onClick={handleReset}>Reset</button>
           <button onClick={handleStop}>Stop</button>
        </div>
      </>
       
    )

}

export default App;
