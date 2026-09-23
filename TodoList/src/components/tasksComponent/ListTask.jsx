import React from 'react'
import classes from '../Right_side_Panel/animation.module.css'

export default function ListTask({task,handleComplete,handleOpenEditMenu,handleImportant}) {
  return (
    <div 
    className={`${classes.todoSlide} dark:bg-zinc-900 bg-white my-1 flex  items-center justify-between text-sm w-full  border-b-2 border-gray-600/20 pr-6 
    rounded    hover:bg-cyan-100/10   `}
  >
    <div className="flex items-center w-full  ">
      <button
        onClick={handleComplete}
        className="m-4 cursor-pointer hover:text-blue-600"
      >
        {/* complete button */}
        {task.complete ? (
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" focusable="false"
          >
            <path
              d="M10 2a8 8 0 110 16 8 8 0 010-16zm3.36 5.65a.5.5 0 00-.64-.06l-.07.06L9 11.3 7.35 9.65l-.07-.06a.5.5 0 00-.7.7l.07.07 2 2 .07.06c.17.11.4.11.56 0l.07-.06 4-4 .07-.08a.5.5 0 00-.06-.63z"
              fill="currentColor"
            ></path>
          </svg>
        ) : (
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
        )}
      </button>
      <div onClick={handleOpenEditMenu} className=" w-full cursor-pointer ">
        <p className={task.complete ? "line-through break-all" : 'break-all'}>
          {task.description}
        </p>

        <div className="text-xs  text-gray-500 flex space-x-3 pt-1">
          {/*in 3 ta faghat ba context bayad meghdaro biari neshoon bedi click khor nis too new task benevis */}
          <div className={task.todoOptions.repeat?'hover:text-blue-800  flex space-x-1 items-center ':'hidden '}>
            
            <svg className='cursor-pointer' width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 6.67a.5.5 0 01.3.1l.08.07.01.02A5 5 0 0113.22 15L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06-2.5-2.5a.5.5 0 01-.06-.63l.06-.07 2.5-2.5a.5.5 0 01.76.63l-.06.07L6.72 14h.14L7 14h6a4 4 0 003.11-6.52.5.5 0 01.39-.81zm-4.85-4.02a.5.5 0 01.63-.06l.07.06 2.5 2.5.06.07a.5.5 0 010 .56l-.06.07-2.5 2.5-.07.06a.5.5 0 01-.56 0l-.07-.06-.06-.07a.5.5 0 010-.56l.06-.07L13.28 6h-.14L13 6H7a4 4 0 00-3.1 6.52c.06.09.1.2.1.31a.5.5 0 01-.9.3A4.99 4.99 0 016.77 5h6.52l-1.65-1.65-.06-.07a.5.5 0 01.06-.63z" fill="currentColor"
          ></path>
        </svg>
          <p className='border-r pr-2 border-gray-400 text-nowrap'>{task.todoOptions.repeat}</p>
          
            
          </div>
          <div className={task.todoOptions.remindeMe?'hover:text-blue-800  flex space-x-1 items-center ':'hidden '}>
            <svg  className='cursor-pointer' width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2a5.92 5.92 0 015.98 5.36l.02.22V11.4l.92 2.22a1 1 0 01.06.17l.01.08.01.13a1 1 0 01-.75.97l-.11.02L16 15h-3.5v.17a2.5 2.5 0 01-5 0V15H4a1 1 0 01-.26-.03l-.13-.04a1 1 0 01-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0110 2zm1.5 13h-3v.15a1.5 1.5 0 001.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15zM10 3a4.9 4.9 0 00-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V7.61A4.9 4.9 0 0010 3z"fill="currentColor"></path></svg>
            <p className='border-r pr-2 border-gray-400 whitespace-nowrap'>{task.todoOptions.remindeMe}</p>
          </div>
          <div className={task.todoOptions.dueDate?'hover:text-blue-800  flex space-x-1 items-center ':'hidden '}>
          <svg className='cursor-pointer'  width="15"  height="15"  viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg"><path
               d="M7 11a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm4-5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5V7zm1.5-3h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4z"
               fill="currentColor"></path>
             </svg>
            <p className='border-r pr-2 border-gray-400 whitespace-nowrap'>{task.todoOptions.dueDate}</p>
          
            
          </div>
        </div>
      </div>
    </div>
    <button 
      onClick={handleImportant}
      className="hover:text-blue-600 text-blue-600 cursor-pointer"
    >
      {task.important ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
        >
          <path
            d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9z"
            fill="currentColor"
          ></path>
        </svg>
      ) : (
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
      )}
    </button>
  </div>
);
  
}
