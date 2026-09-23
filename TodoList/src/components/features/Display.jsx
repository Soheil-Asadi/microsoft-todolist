import React, { useContext } from "react";
import { LayoutContext } from "../../store/uiContext";

export default function Display({tabName}) {
  const ctxValue = useContext(LayoutContext);
  const {isList} = ctxValue
  function handleDisplay(payload) {
    ctxValue.setDisplayMode(payload);
  }
  function handleCloseMenu(){
      ctxValue.toggleMenu()
    }



  return (
    
    <div className=" flex   py-6 space-x-4 justify-center items-center text-gray-600 dark:text-white  ">
      <div className="flex">
        {ctxValue.isMenuOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2c.41 0 .75.34.75.75v1.5a.75.75 0 01-1.5 0v-1.5c0-.41.34-.75.75-.75zm0 15a5 5 0 100-10 5 5 0 000 10zm0-1.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm9.25-2.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM12 19c.41 0 .75.34.75.75v1.5a.75.75 0 01-1.5 0v-1.5c0-.41.34-.75.75-.75zm-7.75-6.25a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zm-.03-8.53c.3-.3.77-.3 1.06 0l1.5 1.5a.75.75 0 01-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06zm1.06 15.56a.75.75 0 11-1.06-1.06l1.5-1.5a.75.75 0 111.06 1.06l-1.5 1.5zm14.5-15.56a.75.75 0 00-1.06 0l-1.5 1.5a.75.75 0 001.06 1.06l1.5-1.5c.3-.3.3-.77 0-1.06zm-1.06 15.56a.75.75 0 101.06-1.06l-1.5-1.5a.75.75 0 10-1.06 1.06l1.5 1.5z"
              fill="currentColor"
            ></path>
          </svg>
        ) : (
          <button  onClick={handleCloseMenu}>

          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              d="M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm0 5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm.5 4.5a.5.5 0 000 1h15a.5.5 0 000-1h-15z"
              fill="currentColor"
              ></path>
          </svg>
              </button>
        )}
      </div>
      <p className="-ml-2 text-xl text-black dark:text-white font-semibold">{tabName}</p>
      <div className="font-semibold">. . .</div>
      <button
        className={`${!isList && 'border-b-gray-500 rounded-b-none'} dark:hover:bg-zinc-800 cursor-pointer flex space-x-2 items-center text-sm p-2 rounded   border-2 border-transparent focus: hover:bg-white `}
        onClick={() => handleDisplay("grid")}
      >
        <svg
          className="text-gray-600 "
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 11c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 012 16.5v-4c0-.83.67-1.5 1.5-1.5h4zm9 0c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5h4zm-9-9C8.33 2 9 2.67 9 3.5v4C9 8.33 8.33 9 7.5 9h-4A1.5 1.5 0 012 7.5v-4C2 2.67 2.67 2 3.5 2h4zm9 0c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0111 7.5v-4c0-.83.67-1.5 1.5-1.5h4z"
            fill="currentColor"
          ></path>
        </svg>
        <p className="hidden md:flex">Grid</p>
      </button>
      <button
        className={`${isList && 'border-b-gray-500 rounded-b-none'} dark:hover:bg-zinc-800 cursor-pointer flex space-x-2 items-center text-sm p-2 rounded   border-2 border-transparent focus: hover:bg-white `}
        onClick={() => handleDisplay("list")}
      >
        <svg
          className="text-gray-500"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 15a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H12.5zm5-6a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-.98l.1-.01H17.5zm-4-6a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H13.5z"
            fill="currentColor"
          ></path>
        </svg>
        <p className="hidden md:flex ">List</p>
      </button>
      
    </div>
    
      
     
  );
}
