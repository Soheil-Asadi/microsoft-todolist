import { useContext } from "react";
import Task from "./Task";
import { LayoutContext } from "../../store/uiContext";

export default function AllTasks({ tasks, sortMethod }) {
  const { isList ,generalSettings } = useContext(LayoutContext);
  let sortedTodos = [...tasks];
  if(generalSettings.newTasksTop && sortMethod ==='default'){
    sortMethod='CREATION_DATE'
  }
  
  if (sortMethod === "ALPHABETICALLY") {
    sortedTodos.sort((a, b) =>
      a.description.toLowerCase().localeCompare(b.description.toLowerCase())
    );
  }
  if (sortMethod === "CREATION_DATE"  ) {
    sortedTodos.sort((a, b) => b.createdAt - a.createdAt);
  }
  if (sortMethod === "DUE_DATE") {
    console.log(sortedTodos);
  }

  if (sortMethod === "IMPORTANCE") {
    sortedTodos.sort((a, b) => b.important - a.important);
  }

  return isList ? (
    <ul>
      {sortedTodos.map((task) => (
        <li key={task.id}>
          <Task task={task}></Task>
        </li>
      ))}
    </ul>
  ) : (
    <>
    {tasks.length > 0 &&
      <div className="w-full bg-white flex px-2 py-4 rounded border dark:border-gray-600 dark:bg-zinc-800  border-gray-200/80 rounded-b-none ">
        <div className="flex flex-col w-1/2 ">
          <p className="pl-10 text-xs dark:text-white text-gray-800 hover:text-blue-700">Title</p>
        </div>
        <div className="flex  w-1/2 space-x-4  ">
          <p className="mr-20 whitespace-nowrap text-xs dark:text-white text-gray-800 hover:text-blue-700">Due Date</p>
          <p className=" text-xs dark:text-white text-gray-800 hover:text-blue-700 ">Importance</p>
        </div>
      </div>
      }
      <ul>
        {sortedTodos.map((task) => (
          <li
            className=""
            key={task.id}
          >
            <Task task={task}></Task>
          </li>
        ))}
      </ul>
      
    </>
  );
}
