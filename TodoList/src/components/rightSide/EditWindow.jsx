import { useContext } from "react";
import useResize from "../../hooks/useResize";

import { LayoutContext } from "../../store/uiContext";
import EditPanel from "./EditPanel";

export default function EditWindow() {
  const { isRightMenuOpen } = useContext(LayoutContext);
  const { width, handleMouseDown } = useResize(350);
  return (
    isRightMenuOpen && (
      <div
        style={{ width: `${width}px` }}
        className={`sm:w-2xl w-[${width}px]  absolute  md:relative p-4 pb-10 rounded bg-[#FAF9F8] dark:bg-zinc-900 dark:text-white  `}>
        <div
          onMouseDown={handleMouseDown}
          className=" absolute w-2 h-full top-0 left-0 cursor-col-resize border-l-2 border-gray-500/25 shadow-2xl  bg-linear-to-br from-black/10 ">
          </div>
        <div className="w-full h-full  ">
          <EditPanel />
        </div>
      </div>
    )
  );
}
