import React from "react";
import { Form, Button, Card } from 'react-bootstrap';
import Heading from './Heading';
import Email from './Email';
import ORseperator from './ORseperator';
import ContinueWith from './ContinueWith';
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import './Login.css';
import OtherOption from "./OtherOption";

export default function Login() {
    const LoginText = `Welcome Back`;
    return (
        <Card className="login-card">
            <Card.Body>
                <Heading heading={LoginText}></Heading>
                <Email></Email>
                <OtherOption otherText={`Don't have an account?`}></OtherOption>
                <ORseperator></ORseperator>
                <ContinueWith icon={faGoogle} method={`Gooogle`}></ContinueWith>
                <ContinueWith icon={faFacebook} method={`Facebook`}></ContinueWith>
            </Card.Body>
        </Card>
    )
}