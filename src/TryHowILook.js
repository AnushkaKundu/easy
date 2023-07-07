import React from "react";
import "./TryHowILook.css";
const InputBox = () => {
    return (
      <div className="input-box">
        <input type="text" id="email-input" placeholder=" " required />
        <label htmlFor="email-input">Email</label>
      </div>
    );
  };
  
  export default InputBox;