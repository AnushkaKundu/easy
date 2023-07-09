import React, {useState} from "react";
import "./UnitTodo.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FaBars } from 'react-icons/fa';

export default function UnitTodo ({content, colour}) {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
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
                <div className="content inline">
                    {content}
                </div>
                <FaBars className="move right" />
                <FontAwesomeIcon icon={faTrash} className="inline right trash" />
            </div>
        </div>
    );
}