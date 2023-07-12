import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Card } from 'react-bootstrap';
import Heading from './Heading';
import OtherOption from "./OtherOption";
import Navbar from "../Navbar/Navbar";
import './Email.css';
import ForgotPassword from "./ForgotPasswordText";
import { AuthProvider, useAuth } from '../../contexts/AuthContext';

const SignUp = ({ toggleTheme }) => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    // const handleSignup = async (email, password) => {
    //     try {
    //         await createUserWithEmailAndPassword(auth, email, password);
    //         console.log("User created successfully!");
    //         navigate("/login"); // Redirect the user to the login page after successful signup
    //     } catch (error) {
    //         console.error("Signup error:", error.message);
    //         // Handle the signup error, such as displaying an error message to the user.
    //     }
    // };

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            await signup(emailRef.current.value, passwordRef.current.value)
            setLoading(true)
            navigate('/login')
        } catch {
            setError('Failed to setup account')
        }
        setLoading(false)
    }
    return (
        <AuthProvider>
            <Navbar hb={false} toggleTheme={toggleTheme} />
            {error && console.log(error)}
            <Card className="login-card">
                <Card.Body>
                    <Heading heading="Create your account"></Heading>
                    {error && console.alert(error)}
                    <Form onSubmit={handleSubmit}>
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
                        </div>
                        <button disabled={loading} type="submit" className="continue-button">Sign Up</button>
                    </Form>
                    <OtherOption otherText="Already have an account?" OtherOption="Log in" otherLink="login" />
                </Card.Body>
            </Card>
        </AuthProvider>
    )
};

export default SignUp;
