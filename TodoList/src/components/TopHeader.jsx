import React, { useContext } from 'react'
import { Link } from 'react-router'
import { TodoContext } from '../store/todoContext/todoContext'
const buttonClass='cursor-pointer flex items-center h-full px-2 hover:bg-blue-950/30 focus:bg-blue-800 '

export default function TopHeader({setSidePanel}) {
  const {setSearchedValue}=useContext(TodoContext);
  
  function searchTodosHandler(event){
    setSearchedValue(event)
  }

  return (
    <div className='bg-[#2564CF] dark:bg-zinc-900/50 w-full h-12  flex justify-between text-white items-center border-b dark:border-gray-800'>
        <div className='   h-full flex items-center   '>
            <Link className={buttonClass}>Home</Link>
            <Link className='flex justify-center items-center mx-2 hover:border-b-white  border-b-2 border-b-[#2564CF] whitespace-nowrap '>To Do</Link>
        </div>
        <div>
            <input onChange={(e)=>searchTodosHandler(e.target.value)} placeholder='search' className='dark:focus:placeholder:text-zinc-700 text-gray-900 max-w-md lg:w-md focus:placeholder:text-black dark:bg-zinc-800 dark:text-gray-400 placeholder:text-white  p-1 bg-white outline-0 rounded  md:not-focus:w-md not-focus:w-20 transition-all ease-in-out duration-500 '  type="search"/>
        </div>
        <div className='flex px-2 items-center h-full '>
            <button onClick={()=>setSidePanel('Settings')} className={buttonClass}>setting</button>
            <button onClick={()=>setSidePanel('Help')} className={buttonClass}>Help</button>
            <button onClick={()=>setSidePanel('What is new')} className={buttonClass}>News</button>
            <button onClick={()=>setSidePanel('')} className={buttonClass}>PIC</button>
        </div>

    </div>
  )
}
