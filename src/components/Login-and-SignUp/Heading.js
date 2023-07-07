import React from "react";
import './Heading.css';
export default function Heading({heading, subheading}) {
    return (
        <div className="heading">
            {heading && <h2>{heading}</h2>}
            {subheading && <p>{subheading}</p>}
        </div>
    )
}