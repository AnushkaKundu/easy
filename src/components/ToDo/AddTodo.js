import React from "react";
import "./AddTodo.css";

export default function AddTodo () {
    const handleAdd= () => {
        console.log("add");
    }
    return (
        <div className="add-todo">
            <div className="right">
                <button onClick={handleAdd} className="add-button">Add</button>
            </div>
        </div>
    );
}