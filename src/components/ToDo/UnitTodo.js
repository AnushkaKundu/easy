import React from "react";
import "./UnitTodo.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FaBars } from "react-icons/fa";

export default function UnitTodo({ content, colour, isChecked, handleCompleteTodo, handleDeleteTodo }) {
    const handleCheckboxChange = () => {
        handleCompleteTodo(content);
    };

    const handleTrashClick = () => {
        handleDeleteTodo(content);
    };

    return (
        <div>
            <div className={`unit-todo ${colour}`}>
                <input
                    type="checkbox"
                    name=""
                    value=""
                    className="checkbox-todo inline"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <div className="content inline">{content}</div>
                <FaBars className="move right" />
                <FontAwesomeIcon icon={faTrash} className="inline right trash" onClick={handleTrashClick} />
            </div>
        </div>
    );
}
