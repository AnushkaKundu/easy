import React from "react";
import {Card} from 'react-bootstrap';
import Navbar from "../Navbar/Navbar";
import Heading from "../Login-and-SignUp/Heading";
import AddTodo from "./AddTodo";

import "./ToDo.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FaBars } from 'react-icons/fa';

import UnitTodo from "./UnitTodo";
export default function ToDo() {
    return(
        <>
            <Navbar hb={true}/>
            <div className="todo">
                <Card>
                    <Heading heading={`To-Do`}/>
                    <AddTodo/>
                    <UnitTodo content="jj" colour="light"/>
                    <UnitTodo content="jj" colour="medium"/>
                    <UnitTodo content="jj" colour="dark"/>
                </Card>
            </div>
        </>
    );
}