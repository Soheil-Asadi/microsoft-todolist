import React, { useEffect, useRef, useState } from "react";
const buttonClass=' cursor-pointer pl-6 pr-10 py-2 dark:hover:bg-zinc-600 dark:hover:text-white  w-full text-left  hover:bg-blue-50 whitespace-nowrap '

export default function Repeat({showButtonName,RepeatDate,setRepeatDate ,className}) {
  const [togglePanel,setTogglePanel]=useState(false);
  const ref=useRef();

  function setRepeatMode(data){
    setRepeatDate((prev)=>({...prev,repeat:data}))
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
    <div ref={ref} className={`${className} dark:bg-zinc-800  rounded flex  cursor-pointer relative text-gray-500 `}>
      
      <button  onClick={()=> setTogglePanel(prev=>!prev)} className={RepeatDate  && !showButtonName &&  'text-sm px-1 space-x-1 bg-white dark:bg-zinc-900 dark:text-blue-700 dark:border-zinc-950 flex items-center border  border-gray-300 rounded cursor-pointer'}>
       <p>{showButtonName ? null : RepeatDate}</p>
        <svg className='cursor-pointer' width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 6.67a.5.5 0 01.3.1l.08.07.01.02A5 5 0 0113.22 15L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06-2.5-2.5a.5.5 0 01-.06-.63l.06-.07 2.5-2.5a.5.5 0 01.76.63l-.06.07L6.72 14h.14L7 14h6a4 4 0 003.11-6.52.5.5 0 01.39-.81zm-4.85-4.02a.5.5 0 01.63-.06l.07.06 2.5 2.5.06.07a.5.5 0 010 .56l-.06.07-2.5 2.5-.07.06a.5.5 0 01-.56 0l-.07-.06-.06-.07a.5.5 0 010-.56l.06-.07L13.28 6h-.14L13 6H7a4 4 0 00-3.1 6.52c.06.09.1.2.1.31a.5.5 0 01-.9.3A4.99 4.99 0 016.77 5h6.52l-1.65-1.65-.06-.07a.5.5 0 01.06-.63z" fill="currentColor"
          ></path>
        </svg>
      </button>
      {showButtonName && <p className="text-blue-600 pl-3  ">{RepeatDate ? RepeatDate : 'Repeat'}</p>}
      {togglePanel && 
        <div className="absolute bg-white top-10 left-0 z-10 flex flex-col items-center  rounded border  border-gray-200  ">
          <p className="dark:bg-zinc-800 dark:text-blue-700  border-b  w-full text-center  p-3 border-gray-400">
            Repeat
          </p>
          <div className="dark:bg-zinc-800 dark:text-blue-700  flex flex-col items-start   text-sm text-gray-800 min-w-44 ">
            <button className={buttonClass} onClick={()=>setRepeatMode('Daily')} >Daily</button>
            <button className={buttonClass} onClick={()=>setRepeatMode('Weekdays')} >Weekdays</button>
            <button className={buttonClass} onClick={()=>setRepeatMode('Weekly')} >Weekly</button>
            <button className={buttonClass} onClick={()=>setRepeatMode('Monthly')} >Monthly</button>
            <button className={buttonClass} onClick={()=>setRepeatMode('Yearly')} >Yearly</button>
            <button className="dark:bg-zinc-800 dark:text-blue-700  cursor-pointer pl-6 pr-10 py-2  w-full text-left border-t border-gray-300 hover:bg-blue-50" onClick={()=>setRepeatMode('Custom')} >Custom</button>
            { RepeatDate &&
            <button className={buttonClass} onClick={()=>setRepeatMode('')} >Never repeat</button>
            }
          </div>
        </div>
      }
    </div>
  );
}
