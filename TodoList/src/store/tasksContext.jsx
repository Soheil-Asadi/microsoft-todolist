// import { createContext, useState } from "react";
// import React from "react";

// export const TasksContext = createContext({
//   tasks: [],
//   handleChangeTasks: () => {},
//   handleAddTasks: () => {},
// });

// export default function TasksContextProvider({ children }) {
//   const [tasks, setTasks] = useState([]);

//   function handleAddTasks(task) {
//     setTasks((prevTasks) => [...prevTasks, task]);
//   }
//   function handleChangeTasks(payload) {}

//   const ctxValue = { tasks, handleChangeTasks, handleAddTasks };

//   return (
//     <TasksContext.Provider value={ctxValue}>{children}</TasksContext.Provider>
//   );
// }
// // value: "",
// // completed: false,
// // important: false,
// // planned: false,
// // myDay: false,
