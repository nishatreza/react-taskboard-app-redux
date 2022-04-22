import React from "react";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";

function TaskList() {
  let tasks = useSelector((state) => state);

  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            id={task.id}
            className="task"
            draggable="true"
          />
        );
      })}
    </div>
  );
}

export default TaskList;
