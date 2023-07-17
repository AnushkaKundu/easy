import React from "react";
import { useLocation } from "react-router-dom";
import "./UpdateProfile.css";
import Navbar from "../Navbar/Navbar";
import UnitInfo from "./UnitInfo";
export default function Profile({ toggleTheme }) {
    const location = useLocation();
    const encodedEmail = location?.state?.encodedEmail;
    return (
        <>
            <Navbar hb={true} toggleTheme={toggleTheme} encodedEmail={encodedEmail} />
            <div className="container">
                <div className="top">
                    <div className="profile-picture"></div>
                    <div className="username">Welcome, </div>
                </div>
                <div className="basic-info">
                    <UnitInfo key="Profile picture" value="" />
                    <UnitInfo key="Username" value="" />
                    <UnitInfo key="Birthdate" value="" />
                    <UnitInfo key="Gender" value="" />
                </div>
                <div className="contact-info">
                    <UnitInfo key="Email" value="" />
                    <UnitInfo key="Phone" value="" />
                </div>
            </div>
        </>
    );
}