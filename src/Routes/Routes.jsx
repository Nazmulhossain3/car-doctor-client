import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/LayOut/Main";
import Home from "../Component/Pages/Home/Home/Home";
import Login from "../Component/Login/Login";
import Signup from "../Component/Pages/SignUp/Signup";
import Checkout from "../Component/Pages/Checkout";
import Bookings from "../Component/Pages/Bookservice/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [{
        path : '/',
        element : <Home></Home>

      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/signup',
        element : <Signup></Signup>
      },
      {
        path : '/bookings/:id',
        element :<PrivateRoute> <Checkout></Checkout></PrivateRoute>,
        loader : ({params})=> fetch(`https://car-doctor-server-nine-cyan.vercel.app/services/${params.id}`)
  
      },
      {
        path : '/bookings',
        element : <PrivateRoute><Bookings></Bookings></PrivateRoute>
      }
    
    ]
    },
  ]);

  export default router