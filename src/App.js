import { useEffect } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { tasks } from "./redux/states";

function App() {
  useEffect(() => {
    localStorage.setItem("taskLists", JSON.stringify(tasks));
  }, []);

  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="row main-app">
      {tasks.map((task) => {
        return (
          <main className="flexbox" key={task.id}>
            <div
              className="column"
              id={task.id}
              onDrop={drop}
              onDragOver={dragOver}
            >
              <h4>{task.status}</h4>
              <TaskInput />
              <TaskList />
            </div>
          </main>
        );
      })}
      {/* <div className="column">
        <TaskInput />
        <TaskList />
      </div> */}
    </div>
  );
}

export default App;
