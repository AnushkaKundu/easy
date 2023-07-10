import React from "react";
import { Card } from 'react-bootstrap';
import Heading from './Heading';
import OtherOption from "./OtherOption";
import Email from './Email';
import Navbar from "../Navbar/Navbar";
export default function SignUp({toggleTheme}) {
    return (
        <>
            <Navbar hb={false} toggleTheme={toggleTheme}/>
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