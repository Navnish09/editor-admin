import React, { lazy } from "react";
import pageRoutes from "../configs/pageRoutes.json";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout"));
const Main = lazy(() => import("../views/Main/Main"));
const CreateQuestion = lazy(() => import("../views/Questions"));

const componentsMap = {
  Main,
  CreateQuestion
}

/*****Routes******/
const Routes = [
  {
    path: "/",
    element: <FullLayout />,
    // Insert main routes for the layout
    children: pageRoutes.map((route) => {
      const Component = componentsMap[route.component as keyof typeof componentsMap];

      return ({
        path: route.path,
        element: <Component />,
      });
    })
  }
];

export default Routes;
