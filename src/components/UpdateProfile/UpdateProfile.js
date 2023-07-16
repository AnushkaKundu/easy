import React from "react";
import { Card } from 'react-bootstrap';
import "./UpdateProfile.css";
import Navbar from "../Navbar/Navbar";
import UnitInfo from "./UnitInfo";
export default function profile({ toggleTheme }) {
    return (
        <>
            <Navbar hb={true} toggleTheme={toggleTheme} />
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