import React from "react";
import { Form } from "react-bootstrap";
export default function Email() {
    return (
        <>
            <div class="input-box">
            <input type="text" class="input-field" id="email" autocomplete="off" required/>
            <label for="email">Email</label>
            </div>
        </>
    )
}