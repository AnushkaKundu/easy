import React, { useEffect, useState } from "react";
import { auth } from '../config/firebase'
const AuthContext = React.createContext()


export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(false)

    function signup(email, password) {
        return (
            auth.createUserWithEmailAndPassword(email, password)
        )
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
