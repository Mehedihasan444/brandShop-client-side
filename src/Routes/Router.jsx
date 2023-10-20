import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import AddProduct from "../Pages/AddProduct/AddProduct";
import ErrorElement from "../Component/ErrorElement/ErrorElement";
import MyCart from "../Pages/MyCart/MyCart";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import BrandDetailsPage from "../Pages/BrandDetailsPage/BrandDetailsPage";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/BrandDetailsPage/:name",
        element: <BrandDetailsPage></BrandDetailsPage>,
        loader: () => fetch("http://localhost:5000/advertisements"),
      },
      {
        path: "/ProductDetails/:_id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute> ,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/AddProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/UpdateProduct",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
      },
      {
        path: "/MyCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
      {
        path: "/LogIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default route;
