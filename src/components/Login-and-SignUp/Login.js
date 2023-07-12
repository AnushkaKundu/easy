import React, { useRef, useState } from "react";
import { Form, Card } from 'react-bootstrap';
import Heading from './Heading';
import ORseperator from './ORseperator';
import ContinueWith from './ContinueWith';
import './Login.css';
import OtherOption from "./OtherOption";
import Navbar from "../Navbar/Navbar";
import './Email.css';
import ForgotPassword from "./ForgotPasswordText";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Email = () => {
    const handleCheckboxChange = () => {
        console.log(`change`)
    }

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate("/homepage");
        } catch {
            setError("Failed to log in");
        }

        setLoading(false);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-box">
                    <input
                        type="email"
                        className="input-field"
                        id="email"
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
                        placeholder=" "
                        required
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <label className="checkbox">
                    <input
                        type="checkbox"
                        onChange={handleCheckboxChange}
                    />
                    Login as admin
                </label>
            </div>
            <button type="submit" className="continue-button" >Login</button>
            <ForgotPassword />
        </Form>
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