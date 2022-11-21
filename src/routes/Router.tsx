import React, { lazy } from "react";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout"));

/*****Routes******/
const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
  },
];

export default ThemeRoutes;
