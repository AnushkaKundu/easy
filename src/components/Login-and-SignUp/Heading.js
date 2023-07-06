import React from "react";
export default function Heading({heading, subheading}) {
    return (
        <>
            {heading && <h2>{heading}</h2>}
            {subheading && <p>{subheading}</p>}
        </>
    )
}