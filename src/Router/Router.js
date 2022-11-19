import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AddService from "../pages/AddService/AddService";
import AllFoods from "../pages/AllFoods/AllFoods";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyReviews from "../pages/MyReviews/MyReviews";
import Register from "../pages/Register/Register";
import ServiceReview from "../pages/ServiceReview/ServiceReview";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://assignment11-server-five.vercel.app/category"),
      },
      {
        path: "/myreview",
        element: (
          <PrivetRoute>
            <MyReviews />
          </PrivetRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivetRoute>
            <AddService />
          </PrivetRoute>
        ),
      },{path:"/blog",element:<Blog/>},
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/services",
        element: <AllFoods />,
        loader: () => fetch("https://assignment11-server-five.vercel.app/services"),
      },
      {
        path: "/ServiceReview/:id",
        element: <ServiceReview />,
        loader: ({ params }) =>
          fetch(`https://assignment11-server-five.vercel.app/foods/${params.id}`),
      },
    ],
  },
]);
