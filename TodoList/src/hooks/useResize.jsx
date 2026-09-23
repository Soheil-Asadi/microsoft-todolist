import React, { useEffect, useState } from "react";

export default function useResize( initWidth ) {
  const [width, setWidth] = useState(initWidth);
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      function handleMouseMove(e) {
        const userWidth = window.innerWidth - e.clientX;
        if (initWidth + 100 > userWidth && userWidth > initWidth-100) {
          setWidth(userWidth);
        }
      }
      window.addEventListener("mouseup", handleMouseUp);
      function handleMouseUp() {
        setIsResizing(false);
      }
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isResizing, initWidth]);

  function handleMouseDown() {
    
    setIsResizing(true);
  }
  return { handleMouseDown, width };
}
