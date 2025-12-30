import { useState } from 'react'
import Sum from "./sum.jsx";


function App() {
     const [count, setCount] = useState(0);

     function Counter() {
      return (setCount(count + 1));
    }


     return ( 
          <div className="Counter">
               <h1>Counter: {count}</h1>
               <button onClick={Counter}>Increasing</button>
               <Sum></Sum>
          </div>
        
     )
}

export default App
