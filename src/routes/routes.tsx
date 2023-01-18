import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Add from "../pages/Add";
import Books from "../pages/Books";
import Update from "../pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/books",
        element: <Books></Books>,
      },
      {
        path: "/add",
        element: <Add></Add>,
      },
      {
        path: "/update",
        element: <Update></Update>,
      },
    ],
  },
]);

export default router;
