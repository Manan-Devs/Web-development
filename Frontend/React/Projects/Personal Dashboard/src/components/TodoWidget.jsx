import { useState } from "react";

function TodoWidget() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([...tasks, input]);
    setInput("");
  };


  return (
    <div className="Todo-Cont">
      <h1>Tasks</h1>

      <div className="Add_New_Task">
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}> Add </button>
      </div>
      <div className="Tasks_Container">
        {tasks.map((task, index) => (
          <div className="Task_Container" key={index}>
            <input onClick={}  type="checkbox" />
             <span>{task}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoWidget;
