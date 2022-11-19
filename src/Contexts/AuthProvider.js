import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.confiq';

export const AuthContext = createContext();
const auth=getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
     useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser);
       });
       return () => {
         unsubscribe();
       };
     });
    const logIn = (email, password) => {
      return signInWithEmailAndPassword(auth,email,password);
    };
    const logOut = () => {
        return signOut(auth)
    }
      const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
      };
    const authInfo = { user, createUser, logIn, logOut, updateUserProfile };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;