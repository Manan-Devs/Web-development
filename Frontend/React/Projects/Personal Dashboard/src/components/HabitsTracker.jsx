import { useState } from "react";

function HabitsTracker() {
  const [habits, setHabits] = useState([]);
  const [input, setInput] = useState("");

  // Add Habit (same as addTodo)
  const addHabit = () => {
    if (input.trim() === "") return;

    setHabits([
      ...habits,
      {
        id: Date.now(),
        text: input,
        completed: false
      }
    ]);

    setInput("");
  };

  // Toggle Habit (same as toggleTodo)
  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? { ...habit, completed: !habit.completed }
          : habit
      )
    );
  };

  // Delete Habit (same as deleteTodo)
  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <div className="Habits_Container">
      <h1>Habits</h1>

      <div className="Add_Habit">
        <input
          type="text"
          placeholder="Add a habit..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addHabit()}
        />
        <button onClick={addHabit}>Add</button>
      </div>

      <div className="Habits_List">
        {habits.map((habit) => (
          <div key={habit.id} className="Habit_Item">
            <input
              type="checkbox"
              checked={habit.completed}
              onChange={() => toggleHabit(habit.id)}
        />

            <span
              style={{
                textDecoration: habit.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {habit.text}
            </span>

            <button onClick={() => deleteHabit(habit.id)}>
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HabitsTracker;
