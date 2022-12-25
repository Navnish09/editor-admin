import React from "react";
import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";

const App = () => {
  const element = useRoutes(Themeroutes);

  return <div>{element}</div>;
};

export default App;
