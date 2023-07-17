import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Heading from "../Login-and-SignUp/Heading";
import AddTodo from "./AddTodo";
import UnitTodo from "./UnitTodo";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import './ToDo.css'

export default function ToDo({ toggleTheme }) {
    const location = useLocation();
    const encodedEmail = location?.state?.encodedEmail;

    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);

    useEffect(() => {
        const databaseRef = firebase.database().ref("users");
        const userRef = databaseRef.child(encodedEmail);
        const todosRef = userRef.child("todos");
        const completedTodosRef = userRef.child("completedTodos");

        todosRef.on("value", (snapshot) => {
            const todosData = snapshot.val();
            if (todosData) {
                const todosArray = Object.values(todosData);
                setTodos(todosArray);
            } else {
                setTodos([]);
            }
        });

        completedTodosRef.on("value", (snapshot) => {
            const completedTodosData = snapshot.val();
            if (completedTodosData) {
                const completedTodosArray = Object.values(completedTodosData);
                setCompletedTodos(completedTodosArray);
            } else {
                setCompletedTodos([]);
            }
        });

        return () => {
            todosRef.off("value");
            completedTodosRef.off("value");
        };
    }, [encodedEmail]);

    const handleAddTodo = (todoValue) => {
        const databaseRef = firebase.database().ref("users");
        const userRef = databaseRef.child(encodedEmail);
        const todosRef = userRef.child("todos");

        const newTodoRef = todosRef.push();
        newTodoRef.set(todoValue);
    };

    const handleCompleteTodo = (todo) => {
        const databaseRef = firebase.database().ref("users");
        const userRef = databaseRef.child(encodedEmail);
        const todosRef = userRef.child("todos");
        const completedTodosRef = userRef.child("completedTodos");

        if (todos.includes(todo)) {
            // Remove the todo from todos list
            todosRef.once("value", (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const childKey = childSnapshot.key;
                    const childData = childSnapshot.val();
                    if (childData === todo) {
                        todosRef.child(childKey).remove();
                        // Add the todo to completed todos list
                        const newCompletedTodoRef = completedTodosRef.push();
                        newCompletedTodoRef.set(todo);
                    }
                });
            });
        } else if (completedTodos.includes(todo)) {
            // Remove the todo from completed todos list
            completedTodosRef.once("value", (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const childKey = childSnapshot.key;
                    const childData = childSnapshot.val();
                    if (childData === todo) {
                        completedTodosRef.child(childKey).remove();
                        // Add the todo to todos list
                        const newTodoRef = todosRef.push();
                        newTodoRef.set(todo);
                    }
                });
            });
        }
    };

    const handleDeleteTodo = (todo) => {
        const databaseRef = firebase.database().ref("users");
        const userRef = databaseRef.child(encodedEmail);
        const todosRef = userRef.child("todos");
        const completedTodosRef = userRef.child("completedTodos");

        todosRef.once("value", (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                if (childData === todo) {
                    todosRef.child(childKey).remove();
                }
            });
        });

        completedTodosRef.once("value", (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                if (childData === todo) {
                    completedTodosRef.child(childKey).remove();
                }
            });
        });
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
                            isChecked={false} // Set default unchecked for todos
                            handleCompleteTodo={handleCompleteTodo}
                            handleDeleteTodo={handleDeleteTodo}
                        />
                    ))}
                    <Heading heading={`Completed ToDos`} className="completed-heading" />
                    <hr className="completed" />
                    {completedTodos.map((completedTodo, index) => (
                        <UnitTodo
                            key={index}
                            content={completedTodo}
                            colour={index % 3 === 0 ? "light" : index % 3 === 1 ? "medium" : "dark"}
                            isChecked={true} // Set default checked for completed todos
                            handleCompleteTodo={handleCompleteTodo}
                            handleDeleteTodo={handleDeleteTodo}
                        />
                    ))}
                </Card>
            </div>
        </>
    );
}
