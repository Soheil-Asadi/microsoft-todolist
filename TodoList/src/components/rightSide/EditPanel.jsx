import React, { useContext, useEffect, useRef, useState } from "react";
import AddDueDate from "../features/AddDueDate";
import AddFile from "../features/AddFile";
import Category from "../features/Category";
import Repeat from "../features/Repeat";
import RemindMe from "../features/RemindMe";
import { LayoutContext } from "../../store/uiContext";
import { TodoContext } from "../../store/todoContext/todoContext";
import Modal from "../features/Modal";

export default function EditPanel() {
  const uiCtx = useContext(LayoutContext);
  const { generalSettings } = uiCtx;
  const {
    todos,
    selectedTodoId,
    removeTodos,
    setTodoId,
    editTodos,
    toggleComplete,
    toggleImportant,
    editTodoDescription,
  } = useContext(TodoContext);
  
  const selectedTodo = todos.find((todo) => todo.id === selectedTodoId);
  const date = new Date(selectedTodo.createdAt).toString();
  const createdDate = date.split(" ").slice(0, 4).join(" ");
  const modalRef = useRef();
  const [todoOptionsChanges, setTodoOptionsChanges] = useState({});
  function handleCloseRightMenu() {
    uiCtx.setRightMenuOpen("close");
    // console.log(uiCtx.isRightMenuOpen)
  }
  // console.log(todoOptionsChanges);

  function deleteTodoHandler() {
    removeTodos(selectedTodoId);
    uiCtx.setRightMenuOpen("close");
    setTodoId(null);
    modalRef.current.close();
    // console.log('hi')
  }

  useEffect(() => {
    editTodos(selectedTodo, todoOptionsChanges);
  }, [todoOptionsChanges]);

  useEffect(() => {
    setTodoOptionsChanges({});
  }, [selectedTodoId]);

  function handleEditTodoText(id,value){
    
    if(!value){
      return
    }
    editTodoDescription(id,value)
  }

  return (
    <div className="p-4 md:space-y-2 text-sm space-y-11 h-full rounded -mr-20 md:mr-0 bg-zinc-200 md:bg-[#FAF9F8] justify-between flex flex-col dark:bg-zinc-900 dark:text-white ">
      <div>
        <div className="  bg-white dark:bg-zinc-800">
          <div className="flex items-center bg-blue-50 p-4  dark:bg-zinc-800 space-y-6 md:space-y-0  ">
            {selectedTodo.complete ? (
              <svg
                className="cursor-pointer"
                onClick={() => toggleComplete(selectedTodo)}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-1.25 9.94l4.47-4.47a.75.75 0 011.13.98l-.07.08-5 5a.75.75 0 01-.98.07l-.08-.07-2.5-2.5a.75.75 0 01.98-1.13l.08.07 1.97 1.97 4.47-4.47-4.47 4.47z"
                  fill="currentColor"
                ></path>
              </svg>
            ) : (
              <svg
                className="cursor-pointer"
                onClick={() => toggleComplete(selectedTodo)}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM2 12a10 10 0 1120 0 10 10 0 01-20 0z"
                  fill="currentColor"
                ></path>
              </svg>
            )}
            <input  onChange={(e)=>handleEditTodoText(selectedTodo.id,e.target.value)}   value={selectedTodo.description} type="text" className=" outline-none flex flex-1 px-2  break-all ">
            {/* <input  onChange={(e)=>editTodoDescription(selectedTodo.id,e.target.value)}   value={selectedTodo.description} type="text" className=" outline-none flex flex-1 px-2  break-all "> */}
              
            </input>
            <div>
              {!selectedTodo.important ? (
                <svg onClick={()=> toggleImportant(selectedTodo)} 
                className="cursor-pointer text-blue-700"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 01-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 01-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78zm1.2.94L9.75 8.6c-.2.4-.58.68-1.02.74l-5.05.74 3.66 3.56c.32.3.46.76.39 1.2l-.87 5.02 4.52-2.37c.4-.2.86-.2 1.26 0l4.51 2.37-.86-5.03c-.07-.43.07-.88.39-1.2l3.65-3.55-5.05-.74a1.35 1.35 0 01-1.01-.74L12 4.04z"
                    fill="currentColor"
                  ></path>
                </svg>
              ) : (
                <svg  onClick={()=> toggleImportant(selectedTodo)}
                 className="text-blue-700 cursor-pointer"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 01-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 01-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78z"
                    fill="currentColor"
                  ></path>
                </svg>
              )}
            </div>
          </div>
          <div className="p-4">+ Add step</div>
        </div>
        <div className="p-4 bg-white text-blue-600 mt-2 rounded dark:bg-zinc-800">
          Added to my day
        </div>
        <div className="bg-whit space-y-1 ">
          <RemindMe
            setRemindeMeDate={setTodoOptionsChanges}
            remindeMeDate={selectedTodo.todoOptions.remindeMe}
            showButtonName
            className="p-4 hover:bg-blue-100/80 bg-white"
          />
          <AddDueDate
            setDueDate={setTodoOptionsChanges}
            dueDate={selectedTodo.todoOptions.dueDate}
            showButtonName
            className="p-4 hover:bg-blue-100/80 bg-white"
          />
          <Repeat
            setRepeatDate={setTodoOptionsChanges}
            RepeatDate={selectedTodo.todoOptions.repeat}
            showButtonName
            className="p-4 hover:bg-blue-100/80 bg-white"
          />
          <Category />
          <AddFile />
          <input
            type="text"
            placeholder="Add note"
            className="dark:bg-zinc-800 p-4 bg-white rounded my- break-all w-full outline-0 hover:outline outline-gray-400/50 "
          />
        </div>
      </div>

      <div className="flex justify-between  align-bottom border-t px-4 py-4 -mb-4 border-gray-400/50">
        <button onClick={handleCloseRightMenu} className="cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.18 10.5l-1 .87a.5.5 0 10.66.76l2-1.75a.5.5 0 000-.76l-2-1.75a.5.5 0 10-.66.76l1 .87H5.5a.5.5 0 000 1h3.68zM16 16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12zm1-2a1 1 0 01-1 1h-3V5h3a1 1 0 011 1v8zm-5-9v10H4a1 1 0 01-1-1V6a1 1 0 011-1h8z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <p className="text-xs text-gray-600">{createdDate}</p>
        {/* delete button */}
        <button
          onClick={
            generalSettings.confirmDeleting
              ? () => modalRef.current.showModal()
              : deleteTodoHandler
          }
          className="cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 4h3a1.5 1.5 0 00-3 0zm-1 0a2.5 2.5 0 015 0h5a.5.5 0 010 1h-1.05l-1.2 10.34A3 3 0 0112.27 18H7.73a3 3 0 01-2.98-2.66L3.55 5H2.5a.5.5 0 010-1h5zM5.74 15.23A2 2 0 007.73 17h4.54a2 2 0 001.99-1.77L15.44 5H4.56l1.18 10.23zM8.5 7.5c.28 0 .5.22.5.5v6a.5.5 0 01-1 0V8c0-.28.22-.5.5-.5zM12 8a.5.5 0 00-1 0v6a.5.5 0 001 0V8z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <Modal
        ref={modalRef}
        todo={selectedTodo}
        onDelete={deleteTodoHandler}
        onCancel={() => modalRef.current.close()}
      />
    </div>
  );
}
