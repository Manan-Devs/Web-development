

import { useState , useEffect} from "react";

function TodoWidget() {
  const [seconds, setSeconds] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([...tasks, input]);
    setInput("");
  };
  
  const deleteTask = (indexToDelete) => {
  setTasks(tasks.filter((_, index) => 
     index !== indexToDelete));
  };


  return (
    <div className="Todo-Cont">
      <h1>Tasks</h1>

      <div className="Add_New_Task">
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onKeyDown={(e) => {
               if(e.key === "Enter") {
                  addTask();
               }
          }}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}> Add </button>
      </div>
      <div className="Tasks_Container">
        {tasks.map((task, index) => (
          <div className="Task_Container" key={index}>
            <input onClick={() => deleteTask(index)} type="checkbox" />
             <span>{task}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoWidget;
