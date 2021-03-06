import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from "./actions";
import { tasks } from "./states";

export let reducer = (state = tasks, action) => {
  let newTasks;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_TASK:
      newTasks = [...state];
      newTasks.push(action.payload);
      return newTasks;
    case DELETE_TASK:
      newTasks = [...state];
      newTasks = newTasks.filter((task) => task.id !== action.payload);
      return newTasks;
    case UPDATE_TASK:
      newTasks = [...state];
      let index = -1;
      for (let i = 0; i < newTasks.length; i++) {
        index++;
        if (newTasks[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTasks[index] = action.payload;
        return newTasks;
      }
  }
  return state;
};
