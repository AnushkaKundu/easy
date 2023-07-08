import React from "react";
import { Link } from 'react-router-dom';
import './OtherOption.css';
export default function OtherOption({otherText, OtherOption, otherLink}) {
    const space = `   `;
    const link = "/"+otherLink;
    return (
        <div className="OtherOption" >
            {otherText && 
                <span>
                    {otherText} 
                    {space}
                    <Link to={link} className="link">{OtherOption}</Link>
                </span>
            } 
        </div>
    )
}