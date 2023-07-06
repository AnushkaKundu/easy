import React from "react";
import { Form, Button, Card } from 'react-bootstrap';
import Heading from './Heading';
import Email from './Email';
import ORseperator from './ORseperator';
import ContinueWith from './ContinueWith';
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
export default function Login() {
    const LoginText = `Welcome Back`;
    return (
        <Card>
            <Card.Body>
                <Heading heading={LoginText}></Heading>
                <Email></Email>
                <ORseperator></ORseperator>
                <ContinueWith icon={faGoogle} method={`Gooogle`}></ContinueWith>
                <ContinueWith icon={faFacebook} method={`Facebook`}></ContinueWith>
            </Card.Body>
        </Card>
    )
}