
import { useRef } from "react";



function Video() {


    const videoRef = useRef(null);

    function handleStart() {
         videoRef.current.play();
    }

     function handleStop() {
         videoRef.current.pause();
    }

    function handleRestart() {
          videoRef.current.currentTime = 0;
    }

     return (
    <>
         <video ref={videoRef} src="https://www.pexels.com/download/video/35417737/" width="500" height="300"></video> 
         <div>
             <button onClick={handleStart}>start</button>
             <button onClick={handleStop}>pause</button>
             <button onClick={handleRestart}>restart</button>
         </div>
      </> 
     )
      
}


export default Video;