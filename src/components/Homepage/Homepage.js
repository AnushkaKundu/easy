import React from "react";
import "./Homepage.css";
import Navbar from "../Navbar/Navbar";

export default function Homepage({toggleTheme}) {
    return (
        <div className="homepage">
            <Navbar hb={true} toggleTheme={toggleTheme}/>
        </div>
    );
}