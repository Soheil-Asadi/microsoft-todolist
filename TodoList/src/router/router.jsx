import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import MyDayPage from "../pages/MyDayPage";
import ImportantPage from "../pages/ImportantPage";
import PlannedPage from "../pages/PlannedPage";
import CompletedPage from "../pages/CompletedPage";
import AssignedToMePage from "../pages/AssignedToMePage";
import TasksPage from "../pages/TasksPage";

 const router = createBrowserRouter([
    {path:'/',element:<RootLayout/>,children:[
        {index:true,element:<MyDayPage/>},
        {path:'important',element:<ImportantPage/>},
        {path:'planned',element:<PlannedPage/>},
        {path:'completed',element:<CompletedPage/>},
        {path:'assigned_to_me',element:<AssignedToMePage/>},
        {path:'tasks',element:<TasksPage/>},
    ]}
    
]);
export default router
