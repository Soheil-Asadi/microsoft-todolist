import React from 'react'
import classes from './Right_side_Panel/animation.module.css'
import SettingPanel from './Right_side_Panel/SettingPanel'
import ListTask from './tasksComponent/ListTask'
import Task from './tasksComponent/Task'

export default function SuggestionPanel({setClosePanel,suggestionTasks}) {
  return (
    <div  className={`${classes.slide} dark:bg-zinc-900 dark:text-white absolute md:relative  right-0 md:w-86  bg-[#FAF9F8] p-3  pb-8 h-full overflow-scroll border-l border-gray-400/50 shadow-2xl`}>
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Suggestions</p>
        <button onClick={()=>setClosePanel((prev)=>!prev)} className="cursor-pointer" >
          Close
        </button>
      </div>
      <div  className={classes.slide}>
        <ul className='mt-10'>
            {suggestionTasks.map(task=><li className='my-4' key={task}><ListTask task={task}/></li>)}
        </ul>
        
       
      </div>
    </div>
  )
}
