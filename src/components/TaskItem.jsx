import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/actions";

function TaskItem({ task }) {
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState(task.title);
  let dispatch = useDispatch();

  const dragStart = (e) => {
    const target = e.target;

    e.dataTransfer.setData("card_id", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <div
        className="task"
        id={task.id}
        onDragStart={dragStart}
        onDragOver={dragOver}
        draggable="true"
      >
        <div>#{task.id.length > 1 ? task.id[2] : task.id}</div>
        <div className="form-control">
          {editable ? (
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          ) : (
            <h4>{task.title}</h4>
          )}
        </div>
        <button
          className="btn btn-edit"
          onClick={() => {
            dispatch(
              updateTask({
                ...task,
                title: title,
              })
            );
            if (editable) {
              setTitle(task.title);
            }
            setEditable(!editable);
          }}
        >
          {editable ? "Update" : "Edit"}
        </button>
        <button
          className="btn btn-delete"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
