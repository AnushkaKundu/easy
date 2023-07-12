import React from "react";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Homepage.css";
import Navbar from "../Navbar/Navbar";
import Heading from "../Login-and-SignUp/Heading";

export default function Homepage({ toggleTheme }) {
    const location = useLocation();
    const { username } = location.state;

    return (
        <>
            <Navbar hb={true} toggleTheme={toggleTheme} />
            <div className="homepage">
                <div className="hi"></div>
                <Heading heading={`Good Morning, ${username}`} />
            </div>
        </>
    );
}