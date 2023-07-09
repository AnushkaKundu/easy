import React from "react";
import Mode from "./Mode";
import Hamburger from "./Hamburger";
import "./Navbar.css";

export default function Navbar ({hb}) {
    return (
        <div className="navbar">
            {hb && <div className="button hamburger"><Hamburger/></div>}
            <div className="button mode"><Mode/></div>
            <div className="button">hi</div>
        </div>
    );
}