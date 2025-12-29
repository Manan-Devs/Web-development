import { useState } from "react";

function HabitsTracker() {
  const [habits, setHabits] = useState([
    { id: 1, name: "Drink Water", done: false },
    { id: 2, name: "Exercise", done: false },
    { id: 3, name: "Read Book", done: false }
  ]);

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? { ...habit, done: !habit.done }
          : habit
      )
    );
  };

  return (
    <div className="Habits_Container">
      <h1>Habits</h1>

      {habits.map((habit) => (
        <div key={habit.id} className="Habit_Item">
          <input
            type="checkbox"
            checked={habit.done}
            onChange={() => toggleHabit(habit.id)}
          />
          <span
            style={{
              textDecoration: habit.done ? "line-through" : "none"
            }}
          >
            {habit.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default HabitsTracker;
