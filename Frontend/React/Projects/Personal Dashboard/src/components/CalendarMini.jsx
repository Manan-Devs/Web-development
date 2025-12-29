function Calendar() {
  const today = new Date();

  const day = today.toLocaleDateString("en-US", {
    weekday: "long"
  });

  const date = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="Calendar_Container">
      <h1>Calendar</h1>
      <h2>{day}</h2>
      <p>{date}</p>
    </div>
  );
}

export default Calendar;
