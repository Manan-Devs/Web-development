import TodoWidget from "./TodoWidget";
import TimerWidget from "./TimerWidget";
import WeatherWidget from "./WeatherWidget";
function DashboardGrid() {
  return (
    <div className="dashboard-grid">
        <TodoWidget />
        <TimerWidget />
        <WeatherWidget/>
    </div>
  );
}

export default DashboardGrid;










