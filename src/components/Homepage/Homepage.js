import React, { useEffect, useState } from "react";
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
    const [timeOfDay, setTimeOfDay] = useState("");

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

        // Get the current hour from the system clock
        const currentHour = new Date().getHours();

        // Determine the time of the day based on the current hour
        let timeOfDay;
        if (currentHour >= 0 && currentHour < 12) {
            timeOfDay = "Morning";
        } else if (currentHour >= 12 && currentHour < 18) {
            timeOfDay = "Afternoon";
        } else {
            timeOfDay = "Evening";
        }

        setTimeOfDay(timeOfDay);
    }, [encodedEmail]);

    return (
        <>
            <Navbar hb={true} toggleTheme={toggleTheme} encodedEmail={encodedEmail} />
            <div className="homepage">
                <div className="hi"></div>
                <Heading heading={`Good ${timeOfDay} ${username}`} />
            </div>
        </>
    );
}
