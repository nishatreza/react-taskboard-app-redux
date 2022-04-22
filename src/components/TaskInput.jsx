import React, { useEffect, useState } from "react";
import { addTask } from "../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";

function TaskInput() {
  let [title, setTitle] = useState();
  let dispatch = useDispatch();

  return (
    <div>
      <div className="form-control">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="form-add-input"
        />
        <button
          onClick={() => {
            dispatch(
              addTask({
                id: uuid(),
                title: title,
              })
            );
            setTitle("");
          }}
          className="btn btn-add"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TaskInput;
