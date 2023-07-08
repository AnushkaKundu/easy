import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login-and-SignUp/Login";
import SignUp from "../src/components/Login-and-SignUp/SignUp";
import ForgotPasswordText from "../src/components/Login-and-SignUp/ForgotPasswordText";
import TryHowILook from './TryHowILook';
import './App.css'

function App() {
  return (
    <div id="App" className="center">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPasswordText />} />
          <Route path="/check" element={<TryHowILook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
