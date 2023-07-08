import React from "react";
import Mode from "./Mode";
import Hamburger from "./Hamburger";
import "./Navbar.css";

export default function Navbar () {
    return (
        <div className="navbar">
            <div className="button hamburger"><Hamburger/></div>
            <div className="button mode"><Mode/></div>
            <div className="button">hi</div>
        </div>
    );
}