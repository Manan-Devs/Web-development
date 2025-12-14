

function Greeting() {
    const now = new Date();
    let dateString = now.toDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
   }); 
      let time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
});
    return ( 

         <div className="greetingsCont"> 
             <div className="greetingsInfo">
                 <h1>Good Morning,<span className="break">Manan 👋</span> </h1>
                 <h2>Here's what's on your plate today.</h2>
                 <p>{dateString} &nbsp;   |  &nbsp;  {time}</p>
              </div>
             <div className="greetingsImage">
                 
             </div>
         </div>
    )
}


export default Greeting;