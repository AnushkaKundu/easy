import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import "./Hamburger.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className={`hamburger-icon ${isOpen ? "active" : ""}`} onClick={handleMenuToggle}>
        <FaBars size={10} className="hamburger-icon"/>
      </button>
      <div className={`sidebar ${isOpen ? "show" : ""}`}>
        <div className="option">
          <Link to="/update-profile">Profile</Link>
        </div>
        <div className="option">
        <Link to="/todo">To Do List</Link>
        </div>
        <div className="option">
          <Link to="/chat">Chats</Link>
        </div>
        <button className="close-button" onClick={handleMenuToggle}></button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
