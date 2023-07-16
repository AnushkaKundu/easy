import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./Homepage.css";
import Navbar from "../Navbar/Navbar";
import Heading from "../Login-and-SignUp/Heading";
import { useLocation } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

export default function Homepage({ toggleTheme }) {
    const location = useLocation();
    const encodedEmail = location?.state?.encodedEmail;
    const [username, setUsername] = useState("");

    useEffect(() => {
        if (encodedEmail) {
            const databaseRef = firebase.database().ref("users");
            const emailRef = databaseRef.child(encodedEmail);

            emailRef.once("value")
                .then((snapshot) => {
                    const userData = snapshot.val();
                    const storedUsername = userData?.username;
                    setUsername(storedUsername);
                })
                .catch((error) => {
                    console.log("Error retrieving username from database:", error);
                });
        }
    }, [encodedEmail]);

    return (
        <>
            <Navbar hb={true} toggleTheme={toggleTheme} />
            <div className="homepage">
                <div className="hi"></div>
                <Heading heading={`Good Morning ${username}`} />
            </div>
        </>
    );
}
