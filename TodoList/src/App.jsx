import { RouterProvider } from "react-router";
import "./App.css";
import router from "./router/router";
import LayoutContextProvider, { LayoutContext } from "./store/uiContext";
import TodoContextProvider from "./store/todoContext/todoContext";


function App() {
  return (
    <>
      <TodoContextProvider>
        <LayoutContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </LayoutContextProvider>
      </TodoContextProvider>
    </>
  );
}

export default App;
