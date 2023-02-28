import React from "react";
import Home from "../home/Home";
import "./App.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "../main/Main";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
