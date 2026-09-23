import React, { useContext } from "react";
import { TodoContext } from "../store/todoContext/todoContext";
import AllTasks from "../components/tasksComponent/AllTasks";
import NewTask from "../components/tasksComponent/NewTask";
import Sort from "../components/features/Sort";
import Display from "../components/features/Display";

export default function ImportantPage() {
  const todoCtx = useContext(TodoContext);
  const importantTodos = todoCtx.todos.filter(
    (todo) => todo.important === true && !todo.complete
  );
  
  return (
    <div  className="w-full flex  flex-col flex-1 bg-[#FAF9F8] space-y-4 p-3 -mt-3 dark:bg-zinc-950 dark:text-white  ">
      <div className="flex items-baseline justify-between w-full  ">
        <div>
          <Display tabName='Important' />
          <div className="-mt-6  text-xs"></div>
        </div>

        <div className="flex">
          <Sort />
        </div>
      </div>
      <NewTask pageName="important" />
      <div className="overflow-y-auto   ">
        <AllTasks tasks={importantTodos} />
      </div>
    </div>
  );
}
