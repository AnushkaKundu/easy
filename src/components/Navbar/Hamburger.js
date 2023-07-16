import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaList, FaEnvelope, FaSignOutAlt, FaCalendarAlt } from "react-icons/fa";
import "./Hamburger.css";
import { useAuth } from "../../contexts/AuthContext";

const HamburgerMenu = ({ encodedEmail }) => {
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
        <div className="option" onClick={() => navigate("/homepage", { state: { encodedEmail: encodedEmail } })}>
          <div><FaHome className="link-logo" />Home</div>
        </div>
        <div className="option" onClick={() => navigate("/update-profile", { state: { encodedEmail: encodedEmail } })}>
          <div><FaUser className="link-logo" />Profile</div>
        </div>
        <div className="option" onClick={() => navigate("/todo", { state: { encodedEmail: encodedEmail } })}>
          <div><FaList className="link-logo" />To Do List</div>
        </div>
        <div className="option" onClick={() => navigate("/chat", { state: { encodedEmail: encodedEmail } })}>
          <div><FaEnvelope className="link-logo" />Chats</div>
        </div>
        <div className="option" onClick={() => navigate("/calendar", { state: { encodedEmail: encodedEmail } })}>
          <div><FaCalendarAlt className="link-logo" />Calendar</div>
        </div>
        <hr className="division" />
        <div className="option logout-button">
          <div onClick={handleLogout}>
            <FaSignOutAlt className="link-logo" />Logout
          </div>
        </div>
        {encodedEmail}
        <button className="close-button" onClick={handleMenuToggle}></button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
