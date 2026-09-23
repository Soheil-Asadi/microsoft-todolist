import React, { useContext } from "react";
import { TodoContext } from "../store/todoContext/todoContext";
import AllTasks from "../components/tasksComponent/AllTasks";
import Sort from "../components/features/Sort";
import TodayDate from "../components/features/TodayDate";
import Display from "../components/features/Display";
import background from '../assets/images/assing-pic.png'

export default function AssignedToMePage() {
  // const todoCtx = useContext(TodoContext);
  // const completedTasks = todoCtx.todos.filter((todo) => todo.complete);
  return (
    <div className="w-full flex  flex-col flex-1 bg-[#FAF9F8] space-y-4 p-3 -mt-3 text-green-900 dark:bg-zinc-950 dark:text-white  ">
      <div className="flex items-baseline justify-between w-full  ">
        <div>
          <Display tabName="Assigned to me" />
          <div className="-mt-6  text-xs">
            <TodayDate />
          </div>
        </div>

        <div className="flex">
          {/* <Sort /> */}
        </div>
      </div>
      <div className="overflow-y-auto mx-auto my-auto   ">
        <img  src={background} alt="todo_background" />
      </div>
    </div>
  );
}
