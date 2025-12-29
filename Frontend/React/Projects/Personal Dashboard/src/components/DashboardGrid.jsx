import TodoWidget from "./TodoWidget";
import TimerWidget from "./TimerWidget";
// import WeatherWidget from "./WeatherWidget";
import NotesWidget from "./NotesWidget";
import HabitsTracker from "./HabitsTracker";
import CalendarMini from "./CalendarMini.jsx";
function DashboardGrid() {
  return (
    <div className="dashboard-grid">
        <TodoWidget />
        <TimerWidget />
        {/* <WeatherWidget/> */}
        <NotesWidget/>
        <HabitsTracker/>
        <CalendarMini/>
    </div>
  );
}

export default DashboardGrid;










