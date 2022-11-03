import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../Components/Pages/CheckOut/CheckOut";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Order from "../Components/Pages/Order/Order";
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
            },
            {
                path:'/checkout/:id',
                element:<CheckOut></CheckOut>,
                loader: ({params})=>{
                    return fetch(`http://localhost:5000/services/${params.id}`)
                }
                
            },
            {
                path:'/orders',
                element:<Order></Order>
            }
            
        ]
    }
])
export default router