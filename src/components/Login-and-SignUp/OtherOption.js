import React from "react";
import './OtherOption.css';
export default function OtherOption({otherText, OtherOption, otherLink}) {
    return (
        <div className="OtherOption">
            {otherText && 
                <span>{otherText}</span>
            } 
        </div>
    )
}