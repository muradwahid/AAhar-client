import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AllFoods from "../pages/AllFoods/AllFoods";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/foods"),
      },
      {
        path: "/allfoods",
        element: <AllFoods />,
        loader: () => fetch("http://localhost:5000/foods"),
      },
    ],
  },
]);
