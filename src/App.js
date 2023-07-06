import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login-and-SignUp/Login";
import TryHowILook from './TryHowILook';
import './App.css'

function App() {
  return (
    <div id="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/check" element={<TryHowILook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
