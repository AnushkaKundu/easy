import React, { useState } from "react";
import "./AddTodo.css";
import { FaPlus } from 'react-icons/fa';

export default function AddTodo({ handleAddTodo }) {
    const [todoInput, setTodoInput] = useState("");

    const handleAdd = () => {
        handleAddTodo(todoInput);
        console.log("add");
    };

    const handleChange = (e) => {
        setTodoInput(e.target.value);
    };

    return (
        <div className="add-todo">
            <FaPlus className="inline add-symbol" />
            <input
                type="text"
                placeholder="Add a to-do"
                className="todo-input"
                value={todoInput}
                onChange={handleChange}
            />
            <button onClick={handleAdd} className="add-button right inline">Add</button>
        </div>
    );
}
