import React from "react";
import { Card } from 'react-bootstrap';
import Heading from './Heading';
import Email from './Email';
import ORseperator from './ORseperator';
import ContinueWith from './ContinueWith';
import './Login.css';
import OtherOption from "./OtherOption";
import Navbar from "../Navbar/Navbar";
import { signInWithGoogle } from '../../config/firebase';
export default function Login({ toggleTheme }) {
    const LoginText = `Welcome Back`;
    return (
        <>
            <Navbar hb={false} toggleTheme={toggleTheme} />
            <Card className="login-card">
                <Card.Body>
                    <Heading heading={LoginText}></Heading>
                    <Email fp={true}></Email>
                    {/* <OtherOption otherText={`Don't have an account?`} OtherOption={`Sign Up`} otherLink={`signup`}></OtherOption> */}
                    <ORseperator></ORseperator>
                    <ContinueWith favicon="googleLogo" method={`Google`} onsubmit={signInWithGoogle}></ContinueWith>
                    <ContinueWith favicon="facebookLogo" method={`Facebook`} onsubmit={signInWithGoogle}></ContinueWith>
                    <OtherOption otherText="Don't have an account?" OtherOption="Sign up" otherLink="signup" />
                </Card.Body>
            </Card>
        </>
    )
}