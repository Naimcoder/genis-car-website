import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import Root from "../Layout/Root";

 const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
             path:'login',
             element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Register></Register>
            }
        ]
    }
])
export default router