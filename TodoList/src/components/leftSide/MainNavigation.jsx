import React from "react";
import NavigationBar from "./NavigationBar";
import BottomIcons from "./BottomIcons";

export default function MainNavigation() {
  return (
    <div className="  dark:bg-zinc-900 dark:text-white border-r-2  border-r-zinc-600/20 shadow-xl  transition-all duration-300 ease-in-out w-full lg:max-w-72 max-w-48 h-full flex flex-col justify-between">
      <div>

        <NavigationBar />
        <div className="border-b-2 mx-4 my-6 border-blue-600/30 rounded shadow flex "></div>

      </div>

      <div className=" flex flex-col justify-between h-full mb-7">

        <div>groups</div>
        <BottomIcons />

      </div>
    </div>
  );
}
