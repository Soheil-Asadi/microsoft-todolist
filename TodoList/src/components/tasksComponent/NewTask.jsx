import React, { useContext, useEffect, useRef, useState } from "react";
import { LayoutContext } from "../../store/uiContext";
import AddNewTaskButton from "./AddNewTaskButton";
import { TodoContext } from "../../store/todoContext/todoContext";
import Repeat from "../features/Repeat";
import AddDueDate from "../features/AddDueDate";
import RemindMe from "../features/RemindMe";
import classes from '../Right_side_Panel/animation.module.css'

export default function NewTask({ pageName }) {
  // pageName ro ezafe kardam chon in component too hame safe ha hast va az harjai momkene task add kone karbar
  // pass ba in gozine ma midoonim k taske add shode kodoom safe add mishe avale kari badan mikham az if
  // baresh daram bezaram too meghdare actioni k dare mire context
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [taskOptions,setTaskOptions]=useState({repeat:null,dueDate:null,category:null,remindeMe:null})
  const inputRef = useRef();
  const { isMenuOpen } = useContext(LayoutContext);
  const todoCtx = useContext(TodoContext);
  const disableButton = inputValue === "";
  // console.log(taskOptions.repeat)
  
  useEffect(() => {
    setIsPanelOpen(false);
  }, [isMenuOpen]);
  
  function handleValue() {
    setInputValue(inputRef.current.value);
  }
  
  function handleAddTask(taskValue) {
    if (inputValue.trim() === "") {
      return;
    }
    if (pageName === "myDay") {
      const taskToAdd = { description: taskValue, important:false, myDay: true ,createdAt:Date.now(), todoOptions:taskOptions};
      todoCtx.addTodos(taskToAdd);
    }
    if (pageName === "important") {
      const taskToAdd = { description: taskValue, important: true ,createdAt:Date.now(), todoOptions:taskOptions};
      todoCtx.addTodos(taskToAdd);
    }
    if (pageName === "planned") {
      const taskToAdd = { description: taskValue, important:false, planned:true ,createdAt:Date.now(), todoOptions:taskOptions};
      todoCtx.addTodos(taskToAdd);
    }
    inputRef.current.focus();
      setInputValue("");
      setTaskOptions( {repeat:null,
        dueDate:null,
        category:null,
        remindeMe:null})
  }
  
  console.log(todoCtx.todos);

  return (
    <div className="w-full  mt-4  shadow-md    ">
      <div className="flex items-center relative ">
        {isPanelOpen ? (
          <button className="absolute m-4 cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        ) : (
          <button className="absolute m-4 cursor-pointer">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2.5a.5.5 0 00-1 0V9H2.5a.5.5 0 000 1H9v6.5a.5.5 0 001 0V10h6.5a.5.5 0 000-1H10V2.5z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        )}

        <input 
          ref={inputRef}
          value={inputValue}
          onKeyDown={(e)=>{
            if(e.key==='Enter'){handleAddTask(inputValue)}
          }}
          onChange={handleValue}
          onFocus={() => {
            setIsPanelOpen(true);
          }}
          placeholder="Add a task"
          className={
            isPanelOpen
              ? "placeholder:text-sm  dark:bg-zinc-900 placeholder:text-blue-600 w-full  focus:placeholder:text-black dark:focus:placeholder:text-zinc-500  border-b-2 border-gray-500/20  pr-6 pl-12 py-3 rounded-t-md outline-none bg-white  "
              : "placeholder:text-sm  dark:bg-zinc-900 placeholder:text-blue-600 w-full  focus:placeholder:text-black dark:focus:placeholder:text-zinc-500 border border-black/10 pr-6 pl-12 py-3 rounded-md outline-none bg-white  "
          }
          type="text"
        />
      </div>
      {isPanelOpen && (
        <div className={`${classes.todoSlide} dark:bg-zinc-800  w-full px-4 py-2  bg-[#FAF9F8] flex items-center justify-between rounded-b-md  border-b-white/15 `}>
          <div className=" flex space-x-4">
            <AddDueDate dueDate={taskOptions.dueDate} setDueDate={setTaskOptions}/>
            <Repeat RepeatDate={taskOptions.repeat} setRepeatDate={setTaskOptions}/>
            <RemindMe remindeMeDate={taskOptions.remindeMe} setRemindeMeDate={setTaskOptions}/>
          </div>
          <AddNewTaskButton
            onAddTask={() => handleAddTask(inputValue)}
            disabled={disableButton}
          />
        </div>
      )}
    </div>
  );
}
