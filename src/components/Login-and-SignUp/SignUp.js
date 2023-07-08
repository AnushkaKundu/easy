import React from "react";
import { Form, Button, Card } from 'react-bootstrap';
import Heading from './Heading';
import OtherOption from "./OtherOption";
import Email from './Email';
import Navbar from "../Navbar/Navbar";
export default function SignUp() {
    return (
        <>
            <Card className="login-card">
                <Card.Body>
                    <Heading heading="Create your account"></Heading>
                    <Email fp={false}/>
                    <OtherOption otherText="Already have an account?" OtherOption="Log in" otherLink="login"/>
                </Card.Body>
            </Card>
        </>
    )
}