import React, { useContext, useEffect, useState } from "react";
import { LayoutContext } from "../../store/uiContext";

export default function BackDrop() {
  const { isMenuOpen, toggleMenu, innerWidth } = useContext(LayoutContext);
  const [isBackdrop, setIsBackdrop] = useState("");
  const isMobile = innerWidth < 768;
  useEffect(() => {
    if (isMobile && isMenuOpen) {
      setIsBackdrop("");
    }else{setIsBackdrop('hidden')};
  
  }, [isMobile,isMenuOpen]);

  function closeBackDrop() {
    
    if (innerWidth < 768) {
      setIsBackdrop("hidden");
      if (isMenuOpen) {
        toggleMenu();
      }
    }
  }
  return (
    isMobile && (
      <div
        onClick={closeBackDrop}
        className={`${
          isMobile ? isBackdrop : "hidden"
        }  w-full h-full   bg-gray-700/80 z-2 absolute cursor-pointer`}
      ></div>
    )
  );
}
