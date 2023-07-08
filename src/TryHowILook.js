import React, { useState } from "react";
import "./TryHowILook.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className={`hamburger-icon ${isOpen ? "active" : ""}`} onClick={handleMenuToggle}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      <div className={`sidebar ${isOpen ? "show" : ""}`}>
        <div className="option">
          <a href="#">Profile</a>
        </div>
        <div className="option">
          <a href="#">To Do List</a>
        </div>
        <div className="option">
          <a href="#">Chats</a>
        </div>
        <button className="close-button" onClick={handleMenuToggle}></button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
