import React from 'react'

export default function AddNewTaskButton({disabled,onAddTask}) {
  return (
    <button onClick={onAddTask}
            
            disabled={disabled}
            className="dark:bg-zinc-950 dark:text-white dark:border-gray-700 disabled:cursor-not-allowed text-sm text-blue-600 cursor-pointer py-1 px-2 rounded bg-gray-50/90 border border-black/10 disabled:text-gray-400"
          >
            Add
          </button>
  )
}
