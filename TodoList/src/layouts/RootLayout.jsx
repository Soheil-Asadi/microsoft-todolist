import React, { useContext, useState } from "react";
import { Outlet } from "react-router";
import MainNavigation from "../components/leftSide/MainNavigation";
import TopHeader from "../components/TopHeader";
import { LayoutContext } from "../store/uiContext";
import EditWindow from "../components/rightSide/EditWindow";
import RightSidePanel from "../components/Right_side_Panel/RightSidePanel";
import BackDrop from "../components/features/BackDrop";

export default function RootLayout() {
  const { isMenuOpen } = useContext(LayoutContext);
  const [sidePanelMode, setSidePanelMode] = useState("");

  return (
    <div className="  overflow-hidden h-screen mx-auto dark:bg-zinc-950  ">
      <TopHeader setSidePanel={setSidePanelMode} />
      <div className="h-screen flex flex-col flex-1 pb-5 bg-red-4">
        <div className="flex flex-co flex-1 overflow-hidden relative  ">
          {isMenuOpen && <MainNavigation />}

          
          <div className="flex flex-co flex-1 overflow-hidden relative">
            <BackDrop/>


          <Outlet />
          <EditWindow />
          {sidePanelMode && (
            <RightSidePanel
            closePanel={setSidePanelMode}
            PanelMOde={sidePanelMode}
            />
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
