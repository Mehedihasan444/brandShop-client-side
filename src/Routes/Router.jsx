
import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import AddProduct from "../Pages/AddProduct/AddProduct";
import ErrorElement from "../Component/ErrorElement/ErrorElement";
import MyCart from "../Pages/MyCart/MyCart";


  const Router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root> ,
      errorElement:<ErrorElement></ErrorElement>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/AddProduct",
            element:<AddProduct></AddProduct>
        },
        {
            path:"/MyCart",
            element:<MyCart></MyCart>
        }
      ]
    },
  ]);


export default Router;