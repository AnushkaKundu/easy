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
import Homepage from "./components/Homepage/Homepage";
import Calendar from "./components/Calendar/Calendar";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const themeClass = isDarkTheme ? "dark-theme" : "light-theme";
  return (
    <div id="App" className={`center ${themeClass}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Login toggleTheme={toggleTheme}/>} />
          <Route path="/login" element={<Login toggleTheme={toggleTheme}/>} />
          <Route path="/signup" element={<SignUp toggleTheme={toggleTheme}/>} />
          <Route path="/forgotpassword" element={<ForgotPasswordText toggleTheme={toggleTheme}/>} />
          <Route path="/check" element={<TryHowILook toggleTheme={toggleTheme}/>} />
          <Route path="/homepage" element={<Homepage toggleTheme={toggleTheme}/>} />
          <Route path="/update-profile" element={<UpdateProfile toggleTheme={toggleTheme}/>} />
          <Route path="/todo" element={<Todo toggleTheme={toggleTheme}/>}/>
          <Route path="/calendar" element={<Calendar toggleTheme={toggleTheme} />}/>
          <Route path="/chat" element={<Chat toggleTheme={toggleTheme}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
