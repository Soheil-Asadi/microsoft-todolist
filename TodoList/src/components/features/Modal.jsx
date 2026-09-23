import React from "react";
import classes from '../Right_side_Panel/animation.module.css'

export default function Modal({ ref,onDelete,onCancel,todo }) {

  return (
    <dialog className={`${classes.todoSlide} mx-auto my-auto min-w-72 rounded backdrop:bg-black/50  `} ref={ref}>
      <div className="px-4 pt-6 pb-12 bg-zinc-">
        <div className="flex flex-col items-start space-y-3">
          <h2 className="font-semibold">"{todo.description}" will be pemanently deleted</h2>
          <p className="text-gray-600">you won't be able to undo this action.</p>
        </div>
        <div className="flex justify-end space-x-3 mt-5">
            <button onClick={onCancel} className="px-3 py-1 bg-gray-200 rounded font-semibold hover:bg-gray-300 border border-white hover:border-gray-600 cursor-pointer">Cancel</button>
            <button onClick={onDelete} className="px-3 py-1 bg-red-700 rounded font-semibold text-white border-white cursor-pointer">Delete task</button>
        </div>
      </div>
    </dialog>
  );
}
