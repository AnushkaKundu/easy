import React from "react";
import { useLocation } from "react-router-dom";
import { Card } from 'react-bootstrap';
import Navbar from "../Navbar/Navbar";
import Heading from "../Login-and-SignUp/Heading";
import AddTodo from "./AddTodo";

import "./ToDo.css";

import UnitTodo from "./UnitTodo";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

export default function ToDo({ toggleTheme }) {
    const location = useLocation();
    const encodedEmail = location?.state?.encodedEmail;

    const handleAddTodo = (todoValue) => {
        const databaseRef = firebase.database().ref("users");
        const userRef = databaseRef.child(encodedEmail);
        const todosRef = userRef.child("todos");

        const newTodoRef = todosRef.push();
        newTodoRef.set(todoValue);
    };

    return (
        <>
            <Navbar hb={true} toggleTheme={toggleTheme} encodedEmail={encodedEmail} />
            <div className="todo">
                <Card>
                    <Heading heading={`To-Do`} />
                    <AddTodo handleAddTodo={handleAddTodo} />
                    <UnitTodo content="jj" colour="light" />
                    <UnitTodo content="jj" colour="medium" />
                    <UnitTodo content="jj" colour="dark" />
                </Card>
            </div>
        </>
    );
}
