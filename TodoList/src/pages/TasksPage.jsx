import React, { useContext, useState } from 'react'
import Display from '../components/features/Display'
import Sort from '../components/features/Sort'
import NewTask from '../components/tasksComponent/NewTask'
import AllTasks from '../components/tasksComponent/AllTasks'
import { TodoContext } from '../store/todoContext/todoContext'

export default function TasksPage() {
  const todoCtx = useContext(TodoContext);
  const [sortMethod, setSortMethod] = useState("default");
  const searchedTodos = todoCtx.todos.filter((todo) =>
    todo.description
      .toLowerCase()
      .includes(todoCtx.searchedValue.toLowerCase())
  );

 
  return (
    <div  className="w-full flex  flex-col flex-1 bg-[#FAF9F8] space-y-4 p-3 -mt-3 dark:bg-zinc-950 dark:text-white  ">
    <div className="flex items-baseline justify-between w-full  ">
      <div>
        <Display tabName='Important' />
        <div className="-mt-6  text-xs"></div>
      </div>

      <div className="flex">
        <Sort sortMode={setSortMethod} />
      </div>
    </div>
    <NewTask pageName="" />
    <div className="overflow-y-auto   ">
      <AllTasks sortMethod={sortMethod} tasks={searchedTodos}  />
    </div>
  </div>
  )
}
