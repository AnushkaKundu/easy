import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login-and-SignUp/Login";
import SignUp from "../src/components/Login-and-SignUp/SignUp";
import ForgotPasswordText from "../src/components/Login-and-SignUp/ForgotPasswordText";
import UpdateProfile from "../src/components/UpdateProfile/UpdateProfile";
import Todo from "../src/components/ToDo/ToDo";
import Chat from "../src/components/Chat/Chat";
import TryHowILook from './TryHowILook';
import './App.css';
import './Theme.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <div id="App" className="center dark-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPasswordText />} />
          <Route path="/check" element={<TryHowILook />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/todo" element={<Todo />}/>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
