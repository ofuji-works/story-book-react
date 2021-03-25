import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from "./pages/Index";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Route path="/">
        <Index />
      </Route>
    </Router>
  );
};

export default AppRouter;
