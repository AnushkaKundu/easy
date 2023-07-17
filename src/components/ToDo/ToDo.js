import React from "react";
import { useLocation } from "react-router-dom";
import { Card } from 'react-bootstrap';
import Navbar from "../Navbar/Navbar";
import Heading from "../Login-and-SignUp/Heading";
import AddTodo from "./AddTodo";

import "./ToDo.css";

import UnitTodo from "./UnitTodo";

export default function ToDo({ toggleTheme }) {
    const location = useLocation();
    const encodedEmail = location?.state?.encodedEmail;
    console.log(encodedEmail)
    return (
        <>
            <Navbar hb={true} toggleTheme={toggleTheme} encodedEmail={encodedEmail} />
            <div className="todo">
                <Card>
                    <Heading heading={`To-Do`} />
                    <AddTodo />
                    <UnitTodo content="jj" colour="light" />
                    <UnitTodo content="jj" colour="medium" />
                    <UnitTodo content="jj" colour="dark" />
                </Card>
            </div>
        </>
    );
}
