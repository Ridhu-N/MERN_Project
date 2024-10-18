import { configureStore } from "@reduxjs/toolkit";
import taskList from "./slices/taskSlice";
const store = configureStore({
  reducer: {
    tasks: taskList,
  },
});
export default store;
