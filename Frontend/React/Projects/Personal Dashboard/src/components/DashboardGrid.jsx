import TodoWidget from "./TodoWidget";
import TimerWidget from "./TimerWidget";
import WeatherWidget from "./WeatherWidget";
import NotesWidget from "./NotesWidget";
function DashboardGrid() {
  return (
    <div className="dashboard-grid">
        <TodoWidget />
        <TimerWidget />
        <WeatherWidget/>
        <NotesWidget/>
    </div>
  );
}

export default DashboardGrid;










