import { createBrowserRouter } from "react-router";

import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/HomeLayout";
import Project from "../Page/Project";
import SecondLayout from "../Layout/SecondLayout";
import NotFound from "../Components/Notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
    ],
  },
  {
    path: "/projects",
    Component: SecondLayout,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        Component: Project,
      },
    ],
  },
]);
