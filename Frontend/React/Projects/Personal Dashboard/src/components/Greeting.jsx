import { useEffect, useState } from "react";
import codingImage from '../assets/Coding.png';


function Greeting() {
    const [dateString, setDateString] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        // Set initial date
        const now = new Date();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDateString(now.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        }));

        // Update time every second
        const interval = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            }));
        }, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="greetingsCont">
            <div className="greetingsInfo">
                <h1>Good Morning,<span className="break">User 👋</span></h1>
                <h2>Here's what's on your plate today.</h2>
                <p>{dateString} &nbsp; | &nbsp; {time}</p>
            </div>
            <div className="greetingsImage">
               <img  src={codingImage} alt="Coding image" />
            </div>
        </div>
    )
}

export default Greeting;