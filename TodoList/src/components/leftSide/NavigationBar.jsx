import React, { useContext } from "react";
import { NavLink } from "react-router";
import { LayoutContext } from "../../store/uiContext";
import { TodoContext } from "../../store/todoContext/todoContext";

const navClass =
  "text-sm border-l-3 border-l-transparent py-3 px-6 flex items-center justify-between  hover:bg-[#EFF6FC] dark:hover:bg-zinc-700   ";
const navClassActive =
  "text-sm font-semibold transition-all duration-400 ease-in-out border-l-3 mask-linear-from-amber-50 dark:bg-zinc-800  py-3 px-6 flex items-center justify-between bg-[#EFF6FC] border-l-blue-600   ";

export default function NavigationBar() {
  const todoCtx = useContext(TodoContext);
  const uiCtxValue = useContext(LayoutContext);
  const completedTodosLength = todoCtx.todos.filter((todo) => todo.complete).length;
  const importantTodosLength = todoCtx.todos.filter((todo) => todo.important &&!todo.complete).length;
  const myDayTodosLength = todoCtx.todos.filter((todo) => todo.myDay &&!todo.complete).length;
  const plannedTodosLength = todoCtx.todos.filter((todo) => todo.planned && !todo.complete).length;
  const TodosLength = todoCtx.todos.length;
  function handleCloseMenu() {
    uiCtxValue.toggleMenu();
  }
  return (
    <ul>
      <button
        onClick={handleCloseMenu}
        className=" cursor-pointer pt-8 pb-4 pl-6"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm0 5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm.5 4.5a.5.5 0 000 1h15a.5.5 0 000-1h-15z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      <li> 
        <NavLink
          className={({ isActive }) => (!isActive ? navClass : navClassActive)}
          to="/"
        >
          <div className="    flex space-x-3 items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
            >
              <path
                d="M10 2c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zm0 12a4 4 0 100-8 4 4 0 000 8zm0-1a3 3 0 110-6 3 3 0 010 6zm7.5-2.5a.5.5 0 000-1h-1a.5.5 0 000 1h1zM10 16c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zm-6.5-5.5a.5.5 0 000-1H2.46a.5.5 0 000 1H3.5zm.65-6.35c.2-.2.5-.2.7 0l1 1a.5.5 0 11-.7.7l-1-1a.5.5 0 010-.7zm.7 11.7a.5.5 0 01-.7-.7l1-1a.5.5 0 01.7.7l-1 1zm11-11.7a.5.5 0 00-.7 0l-1 1a.5.5 0 00.7.7l1-1a.5.5 0 000-.7zm-.7 11.7a.5.5 0 00.7-.7l-1-1a.5.5 0 00-.7.7l1 1z"
                fill="currentColor"
              ></path>
            </svg>
            <p>My Day</p>
          </div>
          <p>{myDayTodosLength ? myDayTodosLength : ''}</p>
        </NavLink>
      </li>
      {uiCtxValue.generalSettings.importantPage &&
      <li>
        <NavLink
          className={({ isActive }) => (!isActive ? navClass : navClassActive)}
          to="/important"
        >
          <div className="flex space-x-3 items-center ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
            >
              <path
                d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9zm.9.44L8.07 7.25a1 1 0 01-.75.55L3 8.43l3.12 3.04a1 1 0 01.3.89l-.75 4.3 3.87-2.03a1 1 0 01.93 0l3.86 2.03-.74-4.3a1 1 0 01.29-.89L17 8.43l-4.32-.63a1 1 0 01-.75-.55L10 3.35z"
                fill="currentColor"
              ></path>
            </svg>
            <p>Important</p>
          </div>
          <p>{importantTodosLength?importantTodosLength:''}</p>
        </NavLink>
      </li>}
      {uiCtxValue.generalSettings.plannedPage && 
      <li>
        <NavLink
          className={({ isActive }) => (!isActive ? navClass : navClassActive)}
          to="/planned"
        >
          <div className="flex space-x-3 items-center ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
            >
              <path
                d="M7 11a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm4-5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5V7zm1.5-3h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4z"
                fill="currentColor"
              ></path>
            </svg>
            <p>Planned</p>
          </div>
          <p>{plannedTodosLength?plannedTodosLength:''}</p>
        </NavLink>
      </li>}
      {uiCtxValue.generalSettings.completedPage && 
      <li>
        <NavLink
          className={({ isActive }) => (!isActive ? navClass : navClassActive)}
          to="/completed"
        >
          <div className="flex space-x-3 items-center ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
            >
              <path
                d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm3.36 4.65c.17.17.2.44.06.63l-.06.07-4 4a.5.5 0 01-.64.07l-.07-.06-2-2a.5.5 0 01.63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0z"
                fill="currentColor"
              ></path>
            </svg>
            <p>Completed</p>
          </div>
          <p>{completedTodosLength?completedTodosLength:''}</p>
        </NavLink>
      </li>}
      {uiCtxValue.generalSettings.assignedPage && 
      <li>
        <NavLink
          className={({ isActive }) => (!isActive ? navClass : navClassActive)}
          to="/assigned_to_me"
        >
          <div className="flex space-x-3 items-center ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
            >
              <path
                d="M10 2a4 4 0 100 8 4 4 0 000-8zM7 6a3 3 0 116 0 3 3 0 01-6 0zm-2 5a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0010 18c1.85 0 3.58-.39 4.87-1.2A4.35 4.35 0 0017 13a2 2 0 00-2-2H5zm-1 2a1 1 0 011-1h10a1 1 0 011 1c0 1.3-.62 2.28-1.67 2.95A8.16 8.16 0 0110 17a8.16 8.16 0 01-4.33-1.05A3.36 3.36 0 014 13z"
                fill="currentColor"
              ></path>
            </svg>
            <p>Assigned to me</p>
          </div>
          <p></p>
        </NavLink>
      </li>}
      <li>
        <NavLink
          className={({ isActive }) => (!isActive ? navClass : navClassActive)}
          to="tasks"
        >
          <div className="flex space-x-3 items-center ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
            >
              <path
                d="M9 2.39a1.5 1.5 0 012 0l5.5 4.94c.32.28.5.69.5 1.12v7.05c0 .83-.67 1.5-1.5 1.5H13a1.5 1.5 0 01-1.5-1.5V12a.5.5 0 00-.5-.5H9a.5.5 0 00-.5.5v3.5c0 .83-.67 1.5-1.5 1.5H4.5A1.5 1.5 0 013 15.5V8.45c0-.43.18-.84.5-1.12L9 2.39zm1.33.74a.5.5 0 00-.66 0l-5.5 4.94a.5.5 0 00-.17.38v7.05c0 .28.22.5.5.5H7a.5.5 0 00.5-.5V12c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v3.5c0 .28.22.5.5.5h2.5a.5.5 0 00.5-.5V8.45a.5.5 0 00-.17-.38l-5.5-4.94z"
                fill="currentColor"
              ></path>
            </svg>
            <p>Tasks</p>
          </div>
          <p>{TodosLength?TodosLength:''}</p>
        </NavLink>
      </li>
    </ul>
  );
}
