import React from "react";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
export default function Chat({ toggleTheme }) {
    const location = useLocation();
    const encodedEmail = location?.state?.encodedEmail;
    return (
        <div>
            <Navbar hb={true} toggleTheme={toggleTheme} encodedEmail={encodedEmail} />
        </div>
    );
}