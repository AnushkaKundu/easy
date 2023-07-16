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
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

export default function Login({ toggleTheme }) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const { loginWithGoogle } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            const currentUser = emailRef.current.value;
            const username = getEmailUsername(currentUser);
            try {
                const encodedEmail = encodeEmail(currentUser);
                await storeEmailInDatabase(username, encodedEmail);
            } catch {
                console.log("Error saving in database.");
            }
            navigate("/homepage", { state: { username, encodedEmail } }); // Pass username and encodedEmail as route parameters
        } catch {
            setError("Incorrect username or password");
        }

        setLoading(false);
    }

    function getEmailUsername(user) {
        return user.split("@")[0];
    }

    async function loginGoogle() {
        try {
            await loginWithGoogle();
            const currentUser = firebase.auth().currentUser;
            const username = getGoogleUsername(currentUser);
            try {
                const encodedEmail = encodeEmail(currentUser.email);
                await storeEmailInDatabase(username, encodedEmail);
            } catch {
                console.log("Error saving in database.");
            }
            navigate("/homepage", { state: { username, encodedEmail } }); // Pass username and encodedEmail as route parameters
        } catch (error) {
            console.log(error);
        }
    }

    function getGoogleUsername(user) {
        if (user.displayName) {
            return user.displayName; // Use the display name as the username
        } else if (user.email) {
            return user.email.split("@")[0]; // Use the email part before @ symbol as the username
        } else {
            return ""; // Default username
        }
    }

    async function storeEmailInDatabase(username, encodedEmail) {
        const databaseRef = firebase.database().ref("users");
        const snapshot = await databaseRef.child(encodedEmail).once("value");
        if (!snapshot.exists()) {
            await databaseRef.child(encodedEmail).set({
                username: username
            });
        }
    }

    // Function to encode the email using Base64 encoding
    function encodeEmail(email) {
        return btoa(email);
    }

    // Function to decode the email from Base64 encoding
    function decodeEmail(encodedEmail) {
        return atob(encodedEmail);
    }

    const LoginText = `Welcome Back`;
    const encodedEmail = navigate?.location?.state?.encodedEmail; // Define encodedEmail here
    const username = navigate?.location?.state?.username; // Define username here

    return (
        <>
            <Navbar hb={false} toggleTheme={toggleTheme} encodedEmail={encodedEmail} />
            <Card className="login-card">
                <Card.Body>
                    <Heading heading={LoginText}></Heading>
                    <Form onSubmit={handleSubmit}>
                        {error &&
                            <div className="error-msg">
                                <div variant="danger">{error}</div>
                            </div>
                        }
                        <div className="form-group">
                            <div className="input-box">
                                <input
                                    type="email"
                                    className="input-field"
                                    id="email"
                                    ref={emailRef}
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
                                    ref={passwordRef}
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                />
                                Login as admin
                            </label>
                        </div>
                        <button type="submit" className="continue-button" >Login</button>
                        <ForgotPassword />
                    </Form>
                    <ORseperator></ORseperator>
                    <ContinueWith favicon="googleLogo" method={`Google`} onsubmit={loginGoogle}></ContinueWith>
                    {/* <ContinueWith favicon="facebookLogo" method={`Facebook`} ></ContinueWith> */}
                    <OtherOption otherText="Don't have an account?" OtherOption="Sign up" otherLink="signup" />
                </Card.Body>
            </Card>
        </>
    )
}
