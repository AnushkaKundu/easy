import React from "react";
import "./UpdateProfile.css";
export default function UnitInfo({ key, value }) {
    return (
        <>
            <div>
                <div className="inline">{key}</div>
                <div className="inline">{value}</div>
            </div>
        </>
    )
}