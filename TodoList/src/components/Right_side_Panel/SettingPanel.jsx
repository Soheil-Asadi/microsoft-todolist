import React, { useContext } from "react";
import ToggleButton from "../features/ToggleButton";
import { LayoutContext } from "../../store/uiContext";
import { uiProps } from "../../utils/util";

export default function SettingPanel() {
  const{setGeneralSettings,generalSettings}=useContext(LayoutContext);
  
  function handleGeneralSetting(props){
    setGeneralSettings(prev=> ({...prev,[props]:!prev[props]}))
  }
  // console.log(generalSettings)
  return (
    <>
      <section>
        <h2 className="text-lg my-6 font-semibold">General</h2>
        <ToggleButton checked={generalSettings.confirmDeleting} onClick={()=>handleGeneralSetting(uiProps.confirmDeleting)} buttonName="Confirm before deleting" />
        <ToggleButton checked={generalSettings.newTasksTop} onClick={()=>handleGeneralSetting(uiProps.newTasksTop)} buttonName="Add new tasks on top" />
        <ToggleButton checked={generalSettings.starredTasksTop} onClick={()=>handleGeneralSetting(uiProps.starredTasksTop)} buttonName="Move starred tasks to top" />
        <ToggleButton checked={generalSettings.completionSound} onClick={()=>handleGeneralSetting(uiProps.completionSound)} buttonName="Play completion sound" />
        <ToggleButton checked={generalSettings.showRightMenus} onClick={()=>handleGeneralSetting(uiProps.showRightMenus)} buttonName="show right-click menus" />
        <ToggleButton checked={generalSettings.reminderNotifications} onClick={()=>handleGeneralSetting(uiProps.reminderNotifications)} buttonName="Turn on reminder notifications" />
        <ToggleButton checked={generalSettings.darkMode} onClick={()=>handleGeneralSetting(uiProps.darkMode)} buttonName="Turn on dark mode" />
      </section>
      <section>
        <h2 className="text-lg my-6 font-semibold">Smart lists</h2>
        <ToggleButton checked={generalSettings.importantPage} onClick={()=>handleGeneralSetting(uiProps.importantPage)} buttonName="Important" />
        <ToggleButton checked={generalSettings.plannedPage} onClick={()=>handleGeneralSetting(uiProps.plannedPage)} buttonName="planned" />
        <ToggleButton checked={generalSettings.allPage} onClick={()=>handleGeneralSetting(uiProps.allPage)} buttonName="All" />
        <ToggleButton checked={generalSettings.completedPage} onClick={()=>handleGeneralSetting(uiProps.completedPage)} buttonName="completed" />
        <ToggleButton checked={generalSettings.assignedPage} onClick={()=>handleGeneralSetting(uiProps.assignedPage)} buttonName="Assigned to me" />
        <ToggleButton onClick={()=>handleGeneralSetting()} buttonName="Auto-hide empty smart lists" />
        <ToggleButton onClick={()=>handleGeneralSetting()} buttonName="Show 'Due Today' tasks in My Day" />
      </section>
      <section>
        <h2 className="text-lg my-6 font-semibold">Connected apps</h2>
        <ToggleButton onClick={()=>handleGeneralSetting()} buttonName="Planner" />
        <p className="text-xs -mt-2 text-gray-600">Tasks assigned to you in Planner</p>
      </section>
      <section>
        <h2 className="text-lg my-6 font-semibold">Notifications</h2>
        <ToggleButton onClick={()=>handleGeneralSetting()} buttonName="Email" />
        <p className="text-xs -mt-2 text-gray-600">Get notified when a list is shared with you</p> 
      </section>
    </>
  );
}
