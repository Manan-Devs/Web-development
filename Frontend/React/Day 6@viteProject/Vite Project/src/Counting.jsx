import {useState} from "react"


function Counting({name}) {
     
    const [count, setCount] =   useState(0);

       return ( 

         <>
          <div>
           <p>Our first Counter app: {name}</p>
           <h2>Counter : {count}</h2>
           <button onClick={() => {
               return setCount(count + 1);
             }}>Increment Clocks</button>
         </div>
         </>
       )
}




export default Counting;