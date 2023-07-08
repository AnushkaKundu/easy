import React from "react";
import { Card } from 'react-bootstrap';
import Heading from './Heading';
import Email from './Email';
import ORseperator from './ORseperator';
import ContinueWith from './ContinueWith';
import './Login.css';
import OtherOption from "./OtherOption";
import Navbar from "../Navbar/Navbar";
export default function Login() {
    const LoginText = `Welcome Back`;
    return (
        <>
            <Navbar/>
            <Card className="login-card">
                <Card.Body>
                    <Heading heading={LoginText}></Heading>
                    <Email fp={true}></Email>
                    {/* <OtherOption otherText={`Don't have an account?`} OtherOption={`Sign Up`} otherLink={`signup`}></OtherOption> */}
                    <ORseperator></ORseperator>
                    <ContinueWith favicon="googleLogo" method={`Google`}></ContinueWith>
                    <ContinueWith favicon="facebookLogo" method={`Facebook`}></ContinueWith>
                    <OtherOption otherText="Don't have an account?" OtherOption="Sign up" otherLink="signup"/>
                </Card.Body>
            </Card>
        </>
    )
}