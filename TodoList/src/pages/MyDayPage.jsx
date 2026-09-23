import React, { useContext, useState } from "react";
import Display from "../components/features/Display";
import Sort from "../components/features/Sort";
import Suggestions from "../components/features/Suggestions";
import Group from "../components/features/Group";
import TodayDate from "../components/features/TodayDate";
import NewTask from "../components/tasksComponent/NewTask";
import AllTasks from "../components/tasksComponent/AllTasks";
import { TodoContext } from "../store/todoContext/todoContext";
import { LayoutContext } from "../store/uiContext";
import SuggestionPanel from "../components/SuggestionPanel";

export default function MyDayPage() {
  const todoCtx = useContext(TodoContext);
  const [sortMethod, setSortMethod] = useState("default");
  const [suggestPanelOpen, setSuggestPanelOpen] = useState(true);

  const myDayTasks = todoCtx.todos.filter(
    (todo) => todo.myDay && !todo.complete
  );
  const searchedTodos = myDayTasks.filter((todo) =>
    todo.description
      .toLowerCase()
      .includes(todoCtx.searchedValue.toLowerCase())
  );
  function handlResetSort(){
    setSortMethod('default')
  }

  return (
    <div className="flex w-full">
    <div className="w-full flex  flex-col flex-1 bg-[#FAF9F8] space-y-4 p-3 -mt-3 dark:bg-zinc-950 dark:text-white ">
      <div className="flex items-baseline justify-between w-full  ">
        <div>
          <Display tabName="My Day" />
          <div className="-mt-6  text-xs">
            <TodayDate />
          </div>
        </div>

        <div className="flex">
          <Sort sortMode={setSortMethod} />
          <Group />
          <Suggestions toggleSuggestPanel={setSuggestPanelOpen} />
        </div>
      </div>
      <NewTask pageName="myDay" />
      <div className="overflow-y-auto   ">
        <div className="flex justify-between">

          {todoCtx.searchedValue !=='' ?
          <p>searching for: "{todoCtx.searchedValue}"</p>:null}
          <div className=" flex text-xs space-x-2 "><p>{sortMethod !== 'default'?`Sorted by "${sortMethod.replaceAll('_',' ').toLocaleLowerCase()}"`:null}
            </p>
            <div>
            {sortMethod !== 'default' ?
              <svg onClick={handlResetSort} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13" height="13" viewBox="0 0 24 24">
                <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path></svg>
            :<p></p>}
              </div>
              </div>
        </div>
        <AllTasks tasks={searchedTodos} sortMethod={sortMethod} />
        
      </div>
      
    </div>
      <div>
        {
        suggestPanelOpen && 
        <SuggestionPanel suggestionTasks={myDayTasks} setClosePanel={setSuggestPanelOpen}/>
        }
      </div>

    </div>
  );
}
