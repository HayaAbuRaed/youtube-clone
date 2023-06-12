import React, { createContext, useContext, useState, useEffect } from 'react'
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from '../../Firebase'

const AuthContext = createContext() 
 
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('User', currentUser)
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const signIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }

    const logOut = () => {
        signOut(auth)
    }

    return (
        <AuthContext.Provider value={{signIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider

export const UserAuth = () => useContext(AuthContext)