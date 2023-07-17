import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./UpdateProfile.css";
import Navbar from "../Navbar/Navbar";
import UnitInfo from "./UnitInfo";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

export default function Profile({ toggleTheme }) {
    const location = useLocation();
    const encodedEmail = location?.state?.encodedEmail;
    const [username, setUsername] = useState("");

    useEffect(() => {
        // Retrieve the username from the Firebase Realtime Database
        const databaseRef = firebase.database().ref("users");
        const userRef = databaseRef.child(encodedEmail);
        const usernameRef = userRef.child("username");

        usernameRef.on("value", (snapshot) => {
            const username = snapshot.val();
            setUsername(username);
        });

        return () => {
            // Unsubscribe from the database listener
            usernameRef.off("value");
        };
    }, [encodedEmail]);

    return (
        <>
            <Navbar hb={true} toggleTheme={toggleTheme} encodedEmail={encodedEmail} />
            <div className="container">
                <div className="top">
                    <div className="profile-picture"></div>
                    <div className="username">Welcome, {username}</div>
                </div>
                <div className="basic-info">
                    <UnitInfo key="Profile picture" value="" />
                    <UnitInfo key="Username" value={username} />
                    <UnitInfo key="Birthdate" value="" />
                    <UnitInfo key="Gender" value="" />
                </div>
                <div className="contact-info">
                    <UnitInfo key="Email" value="" />
                    <UnitInfo key="Phone" value="" />
                </div>
            </div>
        </>
    );
}
