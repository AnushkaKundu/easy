import React from "react";
export default function Heading({heading, subheading}) {
    return (
        <>
            {heading && <h2>{heading}</h2>}
            {subheading && <h3>{subheading}</h3>}
        </>
    )
}