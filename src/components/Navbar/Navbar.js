import React from "react";
import Mode from "./Mode";
import Hamburger from "./Hamburger";
import "./Navbar.css";

export default function Navbar ({hb, toggleTheme}) {
    return (
        <div className="navbar">
            {hb && <div className="button hamburger"><Hamburger/></div>}
            <div className="button mode"><Mode toggleTheme={toggleTheme}/></div>
            <div className="button">hi</div>
        </div>
    );
}