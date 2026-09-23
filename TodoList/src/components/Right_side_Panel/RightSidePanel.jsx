import React from "react";
import SettingPanel from "./SettingPanel";
import HelpPanel from "./HelpPanel";
import WhatsNewPanel from "./WhatsNewPanel";
import classes from '../Right_side_Panel/animation.module.css'


export default function RightSidePanel({ closePanel, PanelMOde }) {
  return (
    <div  className={`${classes.slide} dark:bg-zinc-900 dark:text-white absolute right-0 w-xs bg-[#FAF9F8] p-4  pb-8 h-full overflow-scroll border-l border-gray-400/50 shadow-2xl`}>
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">{PanelMOde}</p>
        <button className="cursor-pointer" onClick={() => closePanel("")}>
          close
        </button>
      </div>
      <div key={PanelMOde} className={classes.slide}>
        {PanelMOde === "Settings" && <SettingPanel />}
        {PanelMOde === "Help" && <HelpPanel />}
        {PanelMOde === "What is new" && <WhatsNewPanel />}
      </div>
    </div>
  );
}
