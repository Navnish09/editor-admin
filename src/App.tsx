import React from "react";
import { useRoutes } from "react-router-dom";
import Routes from "./routes/Router";

const App = () => {
  const element = useRoutes(Routes);

  return <div>{element}</div>;
};

export default App;
