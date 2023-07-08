import React from "react";
import googleLogo from '../../images/googleLogo.png';
import facebookLogo from '../../images/facebookLogo.png';
import './ContinueWith.css';
export default function ContinueWith({favicon, method}) {
    let met;
    if (favicon==="googleLogo") met = googleLogo;
    else if (favicon==="facebookLogo") met = facebookLogo;
    return (
        <div className="border">
            <img src={met} className="logoImg"/>
            Continue with {method}
        </div>
    )
}