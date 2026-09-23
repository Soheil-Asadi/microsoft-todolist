import React from "react";

export default function ToggleButton({buttonName ,onClick,checked}) {
  return (
  <div className="my-5">
    <p className="text-sm font-semibold my-2">{buttonName}</p>
    <label  className="relative  flex items-center h-5 w-10 cursor-pointer rounded-full  ">
       <input checked={checked} onClick={onClick} type="checkbox" className="peer  sr-only "  />
       <span className=" absolute inset-0 rounded-full bg-gray-300 peer-checked:bg-blue-500 hover:scale-95 transition-all duration-200"/>
       <span className="absolute left-1 top-1 h-3 w-3 rounded-full bg-white transition-transform  peer-checked:translate-x-5 " />
       <span className="text-gray-800 peer-checked:block hidden absolute left-14 bottom-0.5 dark:text-white">on</span>    
       <span className="text-gray-800 peer-checked:hidden absolute left-14 bottom-0.5 dark:text-white">off</span>    
    </label>
  </div>
  );
}
