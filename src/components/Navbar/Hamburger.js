import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaList, FaEnvelope, FaSignOutAlt, FaCalendarAlt } from "react-icons/fa";
import "./Hamburger.css";
import { useAuth } from "../../contexts/AuthContext";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login"); // Redirect to the login page after logout
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hamburger-menu">
      <button className={`hamburger-icon ${isOpen ? "active" : ""}`} onClick={handleMenuToggle}>
        {/* <FaBars size={12} className="hamburger-icon"/> */}
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      <div className={`sidebar ${isOpen ? "show" : ""}`}>
        <div className="option">
          <Link to="/homepage"><FaHome className="link-logo" />Home</Link>
        </div>
        <div className="option">
          <Link to="/update-profile"><FaUser className="link-logo" />Profile</Link>
        </div>
        <div className="option">
          <Link to="/todo"><FaList className="link-logo" />To Do List</Link>
        </div>
        <div className="option">
          <Link to="/chat"><FaEnvelope className="link-logo" />Chats</Link>
        </div>
        <div className="option">
          <Link to="/calendar"><FaCalendarAlt className="link-logo" />Calendar</Link>
        </div>
        <hr className="division" />
        <div className="option logout-button">
          <div onClick={handleLogout}>
            <FaSignOutAlt className="link-logo" />Logout
          </div>
        </div>
        <button className="close-button" onClick={handleMenuToggle}></button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
