import AppLayout from "./Components/AppLayout";
import Country, {loader as countryLoader} from "./Components/Country";
import Home,{loader as homeLoader} from "./Components/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
      path: "/",
      element: <Home />,
      loader:homeLoader
      },
      {
        path:"country/:name",
        element:<Country/>,
        loader:countryLoader
      }
    ]
  }
  
]);
function App() {
  

  return (
    <RouterProvider router={router} />
 
  )
}

export default App
