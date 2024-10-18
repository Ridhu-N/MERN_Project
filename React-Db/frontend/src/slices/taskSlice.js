import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  taskList: [],
  taskSelected: {},
};
export const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTaskToList: (state, action) => {
      const id = Math.random() * 100;
      let task = { ...action.payload, id };
      state.taskList.push(task);
    },
    removeTaskFromList: (state, action) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload.id
      );
    },
    editTaskInList: (state, action) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    setTaskSelected: (state, action) => {
      state.taskSelected = action.payload;
    },
  },
});
export const {
  addTaskToList,
  removeTaskFromList,
  editTaskInList,
  setTaskSelected,
} = taskSlice.actions;

export default taskSlice.reducer;
