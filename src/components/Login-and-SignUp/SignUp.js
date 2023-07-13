import React, { useRef, useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Card } from 'react-bootstrap';
import Heading from './Heading';
import OtherOption from "./OtherOption";
import Navbar from "../Navbar/Navbar";
import './Email.css';

import { useAuth } from '../../contexts/AuthContext';

const SignUp = ({ toggleTheme }) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    async function submit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate("/")
        }
        catch
        {
            setError("User already exists")
        }
        setLoading(false);
    }
    return (
        <>
            <Navbar hb={false} toggleTheme={toggleTheme} />
            <Card className="login-card">
                <Card.Body>
                    <Heading heading="Create your account"></Heading>
                    <Form onSubmit={submit}>
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
                                    name="email"
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
                                    name="password"
                                    ref={passwordRef}
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <button type="submit" className="continue-button">Sign Up</button>
                    </Form>
                    <OtherOption otherText="Already have an account?" OtherOption="Log in" otherLink="login" />
                </Card.Body>
            </Card>
        </>
    )
};

export default SignUp;
