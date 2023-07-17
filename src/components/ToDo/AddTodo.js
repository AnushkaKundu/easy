import React from "react";
import "./AddTodo.css";
import { FaPlus } from 'react-icons/fa';


export default function AddTodo() {
    const handleAdd = () => {
        console.log("add");
    }
    return (
        <div className="add-todo">
            <FaPlus className="inline add-symbol" />
            <input
                type="text"
                placeholder="Add a to-do"
                className="todo-input"
            />
            <button onClick={handleAdd} className="add-button right inline">Add</button>
        </div>
    );
}