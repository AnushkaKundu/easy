import React from "react";
import Navbar from "../Navbar/Navbar";
export default function Chat({ toggleTheme }) {
    return (
        <div>
            <Navbar hb={true} toggleTheme={toggleTheme} />
        </div>
    );
}