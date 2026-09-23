import React, { useEffect, useRef, useState } from "react";
const buttonClass=' cursor-pointer pl-6 pr-10 py-2 dark:bg-zinc-800 dark:text-blue-700 dark:hover:text-white dark:hover:bg-zinc-700  w-full text-left  hover:bg-blue-50 whitespace-nowrap '


export default function AddDueDate({showButtonName,dueDate,setDueDate ,className}) {
  const [togglePanel,setTogglePanel]=useState(false);
  const ref=useRef()

  function setDueDateMode(data){
    setDueDate((prev)=>({...prev,dueDate:data}))
    setTogglePanel(false)
  }

  useEffect(()=>{
    function closeSortWindow(e){
      if(!ref.current?.contains(e.target)){
        setTogglePanel(false)
      }
    }
    window.addEventListener('click',closeSortWindow)
    return ()=> window.removeEventListener('click',closeSortWindow)
  },[])




  return (
    <div ref={ref}  className={`${className} dark:bg-zinc-800 rounded flex  cursor-pointer relative text-gray-500 `}>
    <button  onClick={()=> setTogglePanel(prev=>!prev)} className={dueDate  && !showButtonName &&  'dark:bg-zinc-900 dark:border-zinc-950 dark:text-blue-700 text-sm px-1 space-x-1 bg-white flex items-center border border-gray-300 rounded cursor-pointer'}>
     <p>{showButtonName ? undefined : dueDate }</p>
      <svg className='cursor-pointer'  width="20"  height="20"  viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg"><path
        d="M7 11a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm4-5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5V7zm1.5-3h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4z"
        fill="currentColor"></path>
      </svg>
    </button>
    {showButtonName && <p className="text-blue-600 pl-3 ">{dueDate ? dueDate : 'Due Date'}</p>}
    {togglePanel && 
      <div className="absolute bg-white top-10 left-0 z-10 flex flex-col items-center  rounded border  border-gray-200  ">
        <p className="dark:bg-zinc-800 dark:text-blue-700 border-b  w-full text-center  p-3 border-gray-400">
          Due Date
        </p>
        <div className="flex flex-col items-start   text-sm text-gray-800 min-w-44 ">
          <button className={buttonClass} onClick={()=>setDueDateMode('Today')} >Today</button>
          <button className={buttonClass} onClick={()=>setDueDateMode('Tomorrow')} >Tomorrow</button>
          <button className={buttonClass} onClick={()=>setDueDateMode('Next Week')} >Next Week</button>
          <button className="dark:hover:bg-zinc-700 dark:hover:text-white dark:bg-zinc-800 dark:text-blue-700 cursor-pointer pl-6 pr-10 py-2  w-full text-left border-t border-gray-300 hover:bg-blue-50" onClick={()=>setDueDateMode('Custom')} >Pick a date</button>
          { dueDate &&
          <button className={buttonClass + 'text-red-900'} onClick={()=>setDueDateMode('')} >Remove Due Date</button>
          }
        </div>
      </div>
    }
  </div>
  );
}









