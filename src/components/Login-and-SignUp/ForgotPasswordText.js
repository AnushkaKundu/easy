import React from "react";
import { Link } from 'react-router-dom';
import './ForgotPasswordText.css';
export default function ForgotPassword() {
    return (
        <div className="fp">
            <Link to="/forgotpassword" className="link">Forgot your password? </Link>
        </div>
    )
}