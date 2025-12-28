import {useState} from "react";

import Counting from  "./Counting.jsx";

function Clock() {
     
    const [clocks,setClocks] = useState(["A","B","C"]);

     function handleChange() {
          setClocks(["D", ...clocks]);
     }     

    return ( 
        <>
          <button onClick={handleChange}>Increment Clocks</button>

          <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20px" , flexWrap:"wrap"}}>
              {clocks.map (clock => {
                  return <Counting name={clock} key={clock}>Clocks</Counting>;
              })}
          </div>
        </>
    )
}


export default Clock;