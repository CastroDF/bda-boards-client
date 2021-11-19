import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes.jsx";
import "./styles/index.css";

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
