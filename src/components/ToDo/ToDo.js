import React, { useEffect, useState } from "react";
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

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const databaseRef = firebase.database().ref("users");
        const userRef = databaseRef.child(encodedEmail);
        const todosRef = userRef.child("todos");

        todosRef.on("value", (snapshot) => {
            const todosData = snapshot.val();
            if (todosData) {
                const todosArray = Object.values(todosData);
                setTodos(todosArray);
            } else {
                setTodos([]);
            }
        });

        return () => {
            todosRef.off("value");
        };
    }, [encodedEmail]);

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
                    {todos.map((todo, index) => (
                        <UnitTodo
                            key={index}
                            content={todo}
                            colour={index % 3 === 0 ? "light" : index % 3 === 1 ? "medium" : "dark"}
                        />
                    ))}
                    <Heading heading={`Completed ToDos`} className="completed-heading" />
                    <hr className="completed" />
                </Card>
            </div>
        </>
    );
}
