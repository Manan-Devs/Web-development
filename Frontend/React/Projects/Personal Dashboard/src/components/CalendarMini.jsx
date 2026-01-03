import { useMemo } from "react";

function CalendarMini() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const monthName = today.toLocaleString("default", {
    month: "short",
  });

  const days = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const calendar = [];

    // Empty slots
    for (let i = 0; i < firstDay; i++) {
      calendar.push({ type: "empty", key: `e-${i}` });
    }

    // Days
    for (let d = 1; d <= totalDays; d++) {
      calendar.push({
        type: "day",
        value: d,
        isToday: d === today.getDate(),
        key: d,
      });
    }

    return calendar;
  }, [year, month, today]);

  return (
    <div className="CalendarMini">
      <h1>Calendar</h1>
      
      <h4>
        {monthName} {year}
      </h4>

      <div className="mini-weekdays">
        {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      <div className="mini-grid">
        {days.map((day) =>
          day.type === "empty" ? (
            <div key={day.key} className="mini-empty" />
          ) : (
            <div
              key={day.key}
              className={`mini-day ${
                day.isToday ? "mini-today" : ""
              }`}
            >
              {day.value}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default CalendarMini;
