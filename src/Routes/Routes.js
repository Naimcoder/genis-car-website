import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../Components/Pages/CheckOut/CheckOut";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Order from "../Components/Pages/Order/Order";
import Register from "../Components/Pages/Register/Register";
import Root from "../Layout/Root";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRouter>
            <CheckOut></CheckOut>
          </PrivateRouter>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://genis-car-server.vercel.app/services/${params.id}`
          );
        },
      },
      {
        path: "/orders",
        element: (
          <PrivateRouter>
            <Order></Order>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
export default router;
