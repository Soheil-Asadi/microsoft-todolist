import React from "react";
import classes from "../Right_side_Panel/animation.module.css";

export default function GridTasks({
  task,
  handleComplete,
  handleOpenEditMenu,
  handleImportant,
}) {
  return (
    <>
      <div 
        className={`${classes.todoSlide} w-full bg-white flex px-2 py-  border dark:border-gray-600 border-gray-200/80  dark:bg-zinc-800 `}
      >
        <div className="flex  w-1/2 items-center  ">
          <span onClick={handleComplete} className=" group flex w-fit text-blue-800 ">
            {task.complete && <svg
              className="absolute  cursor-pointer "
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm3.36 4.65c.17.17.2.44.06.63l-.06.07-4 4a.5.5 0 01-.64.07l-.07-.06-2-2a.5.5 0 01.63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0z"
                fill="currentColor"
              ></path>
            </svg> }
            <svg
              className="group cursor-pointer"
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
            <svg
              className="absolute hidden group-hover:block cursor-pointer "
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm3.36 4.65c.17.17.2.44.06.63l-.06.07-4 4a.5.5 0 01-.64.07l-.07-.06-2-2a.5.5 0 01.63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0z"
                fill="currentColor"
              ></path>
            </svg>
          </span>

          <p onClick={handleOpenEditMenu} className={task.complete?'line-through pl-5 text-sm text-gray-500 w-full py-3 cursor-pointer dark:text-white   truncate  max-w-2xl  ': 'pl-5 text-sm text-gray-800 w-full  py-3 cursor-pointer dark:text-white   truncate  max-w-2xl'}>
            {task.description}
          </p>
        </div>
        <div className="flex  w-1/2 space-x-30 items-center  ">
          <p className="mr-20 whitespace-nowrap  min-w-18 text-sm text-zinc-700 ">
            {task.todoOptions.dueDate}
          </p>
          <p className="cursor-pointer">
            {!task.important ? (
              <span className="text-blue-800" onClick={handleImportant}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9zm.9.44L8.07 7.25a1 1 0 01-.75.55L3 8.43l3.12 3.04a1 1 0 01.3.89l-.75 4.3 3.87-2.03a1 1 0 01.93 0l3.86 2.03-.74-4.3a1 1 0 01.29-.89L17 8.43l-4.32-.63a1 1 0 01-.75-.55L10 3.35z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            ) : (
              <svg className="text-blue-800" onClick={handleImportant}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9z"
                  fill="currentColor"
                ></path>
              </svg>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
