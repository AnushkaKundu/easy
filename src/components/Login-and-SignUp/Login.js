import React, { useState } from "react";
import { Card } from 'react-bootstrap';
import Heading from './Heading';
import ORseperator from './ORseperator';
import ContinueWith from './ContinueWith';
import './Login.css';
import OtherOption from "./OtherOption";
import Navbar from "../Navbar/Navbar";
import './Email.css';
import ForgotPassword from "./ForgotPasswordText";
import { signInWithGoogle } from '../../config/firebase';

const Email = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-box">
                    <input
                        type="email"
                        className="input-field"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder=" "
                        required
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        className="input-field"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder=" "
                        required
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <label className="checkbox">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheckboxChange}
                    />
                    Login as admin
                </label>
            </div>
            <button type="submit" className="continue-button" >Login</button>
            <ForgotPassword />
        </form>
    );
};
export default function Login({ toggleTheme }) {
    const LoginText = `Welcome Back`;
    return (
        <>
            <Navbar hb={false} toggleTheme={toggleTheme} />
            <Card className="login-card">
                <Card.Body>
                    <Heading heading={LoginText}></Heading>
                    <Email></Email>
                    {/* <OtherOption otherText={`Don't have an account?`} OtherOption={`Sign Up`} otherLink={`signup`}></OtherOption> */}
                    <ORseperator></ORseperator>
                    <ContinueWith favicon="googleLogo" method={`Google`} ></ContinueWith>
                    <ContinueWith favicon="facebookLogo" method={`Facebook`} ></ContinueWith>
                    <OtherOption otherText="Don't have an account?" OtherOption="Sign up" otherLink="signup" />
                </Card.Body>
            </Card>
        </>
    )
}