import React, { useContext } from "react";
import { TodoContext } from "../../store/todoContext/todoContext";
import { LayoutContext } from "../../store/uiContext";
import ListTask from "./ListTask";
import GridTasks from "./GridTasks";

// component morede estefade baraye formate map() kardan todos
export default function Task({ task }) {
  const todoCtx = useContext(TodoContext);
  const uiCtx = useContext(LayoutContext);

  function handleComplete() {
    todoCtx.toggleComplete(task);
  }
  function handleImportant() {
    todoCtx.toggleImportant(task);
  }
  function handleOpenEditMenu(id) {
    todoCtx.setTodoId(id);
    uiCtx.setRightMenuOpen("open");
  }

  return (
    <>
      {uiCtx.isList ? (
        <ListTask
          task={task}
          handleComplete={handleComplete}
          handleImportant={handleImportant}
          handleOpenEditMenu={() => handleOpenEditMenu(task.id)}
        />
      ) : (
        <GridTasks
          handleComplete={handleComplete}
          handleImportant={handleImportant}
          handleOpenEditMenu={() => handleOpenEditMenu(task.id)}
          task={task}
        />
      )}
    </>
    // <div
    //   className={`${classes.todoSlide} dark:bg-zinc-900 bg-white my-1 flex  items-center justify-between text-sm w-full  border-b-2 border-gray-600/20 pr-6
    //   rounded    hover:bg-cyan-100/10   `}
    // >
    //   <div className="flex items-center w-full  ">
    //     <button
    //       onClick={handleComplete}
    //       className="m-4 cursor-pointer hover:text-blue-600"
    //     >
    //       {/* complete button */}
    //       {task.complete ? (
    //         <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" focusable="false"
    //         >
    //           <path
    //             d="M10 2a8 8 0 110 16 8 8 0 010-16zm3.36 5.65a.5.5 0 00-.64-.06l-.07.06L9 11.3 7.35 9.65l-.07-.06a.5.5 0 00-.7.7l.07.07 2 2 .07.06c.17.11.4.11.56 0l.07-.06 4-4 .07-.08a.5.5 0 00-.06-.63z"
    //             fill="currentColor"
    //           ></path>
    //         </svg>
    //       ) : (
    //         <svg
    //           width="20"
    //           height="20"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z"
    //             fill="currentColor"
    //           ></path>
    //         </svg>
    //       )}
    //     </button>
    //     <div onClick={()=>handleOpenEditMenu(task.id)} className=" w-full cursor-pointer ">
    //       <p className={task.complete ? "line-through" : undefined}>
    //         {task.description}
    //       </p>

    //       <div className="text-xs  text-gray-500 flex space-x-6 pt-1">
    //         {/*in 3 ta faghat ba context bayad meghdaro biari neshoon bedi click khor nis too new task benevis */}
    //         <div className="hover:text-blue-800">{task.todoOptions.repeat}</div>
    //         <div className="hover:text-blue-800">{task.todoOptions.remindeMe}</div>
    //         <div className="hover:text-blue-800">{task.todoOptions.dueDate}</div>
    //       </div>
    //     </div>
    //   </div>
    //   <button
    //     onClick={handleImportant}
    //     className="hover:text-blue-600 text-blue-600 cursor-pointer"
    //   >
    //     {task.important ? (
    //       <svg
    //         width="20"
    //         height="20"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //         focusable="false"
    //       >
    //         <path
    //           d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9z"
    //           fill="currentColor"
    //         ></path>
    //       </svg>
    //     ) : (
    //       <svg
    //         width="20"
    //         height="20"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //         focusable="false"
    //       >
    //         <path
    //           d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9zm.9.44L8.07 7.25a1 1 0 01-.75.55L3 8.43l3.12 3.04a1 1 0 01.3.89l-.75 4.3 3.87-2.03a1 1 0 01.93 0l3.86 2.03-.74-4.3a1 1 0 01.29-.89L17 8.43l-4.32-.63a1 1 0 01-.75-.55L10 3.35z"
    //           fill="currentColor"
    //         ></path>
    //       </svg>
    //     )}
    //   </button>
    // </div>
  );
}
