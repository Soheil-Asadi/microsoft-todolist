import { createContext, useEffect, useReducer, useState } from "react";

export const LayoutContext = createContext({
  isMenuOpen: true,
  toggleMenu: () => {},
  isList: true,
  setDisplayMode: () => {},
  isRightMenuOpen: false,
  setRightMenuOpen: () => {},
  generalSettings:{},
  setGeneralSettings:()=>{}
});

function layoutReducer(state, action) {
  if (action.type === "toggle_menu") {
    return {
      ...state,
      isMenuOpen: !state.isMenuOpen,
    };
  }
  if (action.type === "toggle_list") {
    return {
      ...state,
      isList: action.payload === "list" ? true : false,
    };
  }
  if (action.type === "close_menu") {
    return {
      ...state,
      isMenuOpen: false,
    };
  }
  if (action.type === "toggle_rightMenu") {
    if (action.mode === "open") {
      return {
        ...state,
        isRightMenuOpen: true,
      };
    } else {
      return { ...state, isRightMenuOpen: false };
    }
  }
  return state;
}


function LayoutContextProvider({ children }) {
  const [uiState, dispatchUiState] = useReducer(layoutReducer, {
    isMenuOpen: true,
    isList: true,
    isRightMenuOpen: false,
  });
  const[generalSettings,setGeneralSettings]=useState({
    confirmDeleting:true,
    newTasksTop:true,
    starredTasksTop:true,
    completionSound:true,
    showRightMenus:true,
    reminderNotifications:true,
    darkMode:false,
    importantPage:true,
    plannedPage:true,
    allPage:false,
    completedPage:true,
    assignedPage:true,
  })
  //in order to add dark class to 'root' element!!
  useEffect(()=>{
    document.documentElement.classList.toggle('dark',generalSettings.darkMode)
  },[generalSettings.darkMode])


  function toggleMenu() {
    dispatchUiState({ type: "toggle_menu" });
  }
  function setDisplayMode(payload) {
    dispatchUiState({ type: "toggle_list", payload });
  }
  function setRightMenuOpen(mode) {
    dispatchUiState({ type: "toggle_rightMenu", mode });
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        dispatchUiState({ type: "close_menu" });
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ctxValue = {
    isMenuOpen: uiState.isMenuOpen,
    isList: uiState.isList,
    isRightMenuOpen: uiState.isRightMenuOpen,
    toggleMenu: toggleMenu,
    setDisplayMode,
    setRightMenuOpen,
    generalSettings,
    setGeneralSettings,
  };
  return (
    <LayoutContext.Provider value={ctxValue}>{children}</LayoutContext.Provider>
  );
}
export default LayoutContextProvider;
