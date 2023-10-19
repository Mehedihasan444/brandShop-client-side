
import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import AddProduct from "../Pages/AddProduct/AddProduct";
import ErrorElement from "../Component/ErrorElement/ErrorElement";
import MyCart from "../Pages/MyCart/MyCart";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";


  const route = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root> ,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('/brands.json')
        },
        {
            path:"/AddProduct",
            element:<AddProduct></AddProduct>
        },
        {
            path:"/MyCart",
            element:<MyCart></MyCart>
        },
        {
            path:"/LogIn",
            element:<LogIn></LogIn>
        },
        {
            path:"/Register",
            element:<Register></Register>
        }
      ]
    },
  ]);


export default route;