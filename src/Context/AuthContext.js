import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';


export const AuthProvider = createContext()
const auth =getAuth(app);
const Googleprovider = new GoogleAuthProvider();


const AuthContext = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, []);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, Googleprovider);
    };

    const updateUser = (name, image) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName: name, photoURL: image});
    }

    const logOut = () =>{
        localStorage.removeItem('genius-token');
        return signOut(auth);
    };

    const authinfo = {
        loading,
        setLoading,
        user,
        createUser,
        login,
        googleLogin,
        updateUser,
        logOut
    };
    return (
        <AuthProvider.Provider value={authinfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;