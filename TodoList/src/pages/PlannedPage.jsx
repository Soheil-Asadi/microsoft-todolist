import React, { useContext, useState } from 'react'
import { TodoContext } from '../store/todoContext/todoContext';
import Display from '../components/features/Display';
import Sort from '../components/features/Sort';
import NewTask from '../components/tasksComponent/NewTask';
import AllTasks from '../components/tasksComponent/AllTasks';

export default function PlannedPage() {
  const todoCtx = useContext(TodoContext);
  const [sortMethod, setSortMethod] = useState("default");
  const plannedTodos = todoCtx.todos.filter(
    (todo) =>
      todo.planned ||
      todo.todoOptions.repeat  ||
      todo.todoOptions.dueDate  ||
      todo.todoOptions.remindeMe 
  );
  
  const searchedTodos = plannedTodos.filter((todo) =>
    todo.description
      .toLowerCase()
      .includes(todoCtx.searchedValue.toLowerCase())
  );

 
  return (
    <div  className="w-full flex  flex-col flex-1 bg-[#FAF9F8] space-y-4 p-3 -mt-3 dark:bg-zinc-950 dark:text-white  ">
    <div className="flex items-baseline justify-between w-full  ">
      <div>
        <Display tabName='Planned' />
        <div className="-mt-6  text-xs"></div>
      </div>

      <div className="flex">
        <Sort sortMode={setSortMethod} />
      </div>
    </div>
    <NewTask pageName="planned" />
    <div className="overflow-y-auto   ">
      <AllTasks sortMethod={sortMethod} tasks={searchedTodos}  />
    </div>
  </div>
  )
}
