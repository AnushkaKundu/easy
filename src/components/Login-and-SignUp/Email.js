import React, { useState } from "react";
import './Email.css';
import ForgotPassword from "./ForgotPasswordText";

const LoginForm = ({fp}) => {
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
        {fp && <label className="checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        Login as admin
        </label>}
      </div>
      <button type="submit" className="continue-button">Login</button>
      {fp && <ForgotPassword/>}
    </form>
  );
};

export default LoginForm;
