import React, { useEffect, useRef, useState } from "react";
const buttonClass=' cursor-pointer pl-6 pr-10 py-2  w-full text-left dark:hover:bg-zinc-600 dark:bg-zinc-800 dark:text-blue-700 dark:hover:text-white  w-full text-left  hover:bg-blue-50 whitespace-nowrap '

export default function RemindMe({showButtonName,remindeMeDate,setRemindeMeDate ,className}) {
  const [togglePanel,setTogglePanel]=useState(false);
  function setRemindeMe(data){
    setRemindeMeDate((prev)=>({...prev,remindeMe:data}))
    setTogglePanel(false)
  }
  const ref=useRef();
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
    <div ref={ref}  className={`${className} dark:bg-zinc-800   rounded flex  cursor-pointer relative text-gray-500 `}>
      <button
        onClick={()=> setTogglePanel(prev=>!prev)}
        className={remindeMeDate  && !showButtonName &&  ' dark:bg-zinc-900 dark:border-zinc-950 dark:text-blue-700 text-sm px-1 space-x-1 bg-white flex items-center border border-gray-300 rounded cursor-pointer'}>
        <p>{showButtonName? undefined: remindeMeDate}</p>
        <svg  className='cursor-pointer' width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2a5.92 5.92 0 015.98 5.36l.02.22V11.4l.92 2.22a1 1 0 01.06.17l.01.08.01.13a1 1 0 01-.75.97l-.11.02L16 15h-3.5v.17a2.5 2.5 0 01-5 0V15H4a1 1 0 01-.26-.03l-.13-.04a1 1 0 01-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0110 2zm1.5 13h-3v.15a1.5 1.5 0 001.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15zM10 3a4.9 4.9 0 00-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V7.61A4.9 4.9 0 0010 3z"fill="currentColor"></path></svg>
      </button>
      {showButtonName && <p className="text-blue-600 pl-3 ">{remindeMeDate ? remindeMeDate: 'Reminde Me'}</p>}
      {togglePanel && 
        <div className=" absolute bg-white top-10 left-0 z-10 flex flex-col items-center  rounded border  border-gray-200  ">
          <p className="dark:bg-zinc-800 dark:text-blue-700 border-b  w-full text-center  p-3 border-gray-400">
            Reminder
          </p>
          <div className="flex flex-col items-start   text-sm text-gray-800 min-w-44 ">
            <button className={buttonClass} onClick={()=>setRemindeMe('Later today')} >Later today</button>
            <button className={buttonClass} onClick={()=>setRemindeMe('Tomorrow')} >Tomorrow</button>
            <button className={buttonClass} onClick={()=>setRemindeMe('Next week')} >Next week</button>
            <button className="dark:bg-zinc-800 dark:text-blue-700 dark:hover:bg-zinc-800 cursor-pointer pl-6 pr-10 py-2  w-full text-left border-t border-gray-300 hover:bg-blue-50" onClick={()=>setRemindeMe('Custom')} >Pick a date & time</button>
            { remindeMeDate &&
            <button className={buttonClass + 'text-red-700'} onClick={()=>setRemindeMe('')} >Remove reminder</button>
            }
          </div>
        </div>
      }
    </div>
    )
}







