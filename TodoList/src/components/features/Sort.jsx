import React, {  useEffect, useRef, useState } from "react";
// baraye methode sort too har page ye state gozashtim beine Sort va AllTask passesh dadim k too sort method
// moshakhas beshe (set beshe) tooye AllTask bar asase method task haro bechine pass bede be Task={task}

export default function Sort({ sortMode }) {
  const ref=useRef()

  const [sortIsopen, setSortIsopen] = useState(false);
  function handleOpenSort() {
    setSortIsopen((prev) => !prev);
  }
  useEffect(()=>{
    function closeSortWindow(e){
      if(!ref.current?.contains(e.target)){
        setSortIsopen(false)
      }
    }
    window.addEventListener('click',closeSortWindow)
    return ()=> window.removeEventListener('click',closeSortWindow)
  },[])



  
  return (
    <div ref={ref} className="relative   ">
      <button
        onClick={handleOpenSort}
        className="dark:text-white dark:hover:bg-zinc-800  flex items-center rounded p-2 space-x-2 text-gray-600 text-sm cursor-pointer hover:bg-white"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.35 7.35L5 4.71V16.5a.5.5 0 001 0V4.7l2.65 2.65a.5.5 0 00.7-.7l-3.49-3.5A.5.5 0 005.5 3a.5.5 0 00-.39.18L1.65 6.65a.5.5 0 10.7.7zm15.3 5.3L15 15.29V3.5a.5.5 0 00-1 0v11.8l-2.65-2.65a.5.5 0 00-.7.7l3.49 3.5a.5.5 0 00.36.15.5.5 0 00.39-.18l3.46-3.47a.5.5 0 10-.7-.7z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="hidden md:flex">Sort</div>
      </button>
      {sortIsopen && (
        <div  className=" flex absolute bg-white top-10 -right-5 z-10 fle flex-col items-center  rounded ">
          <p className="border-b dark:bg-zinc-800 dark:text-white w-full text-center  p-4 border-gray-400">
            Sort by
          </p>
          <div className="flex flex-col  items-star  text-sm text-gray-800 rounded  ">
            <button className="cursor-pointer px-10 text-blue-900 dark:bg-zinc-800 dark:text-white py-3 border-b w-full text-left border-b-gray-200 " onClick={()=>{sortMode("IMPORTANCE"),setSortIsopen(false)}}>Importance</button>
            <button className="cursor-pointer px-10 text-blue-900 dark:bg-zinc-800 dark:text-white py-3 border-b w-full text-left border-b-gray-200 " onClick={()=>{sortMode("DUE_DATE"),setSortIsopen(false)}}>Due date</button>
            <button className="cursor-pointer px-10 text-blue-900 dark:bg-zinc-800 dark:text-white py-3 border-b w-full text-left border-b-gray-200 " onClick={()=>{sortMode("ALPHABETICALLY"),setSortIsopen(false)}}>Alphabetically</button>
            <button className="cursor-pointer px-10 text-blue-900 dark:bg-zinc-800 dark:text-white py-3 border-b w-full  text-left border-b-gray-200" onClick={()=>{sortMode("CREATION_DATE"),setSortIsopen(false)}}>Creation date</button>
          </div>
        </div>
      )}
    </div>
  );
}
