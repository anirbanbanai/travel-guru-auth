import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../../firebase.confiq';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const RRouterProvider = ({ children }) => {
    const [user, setUser] = useState('');

    const createUser = (emai, password) => {
        return createUserWithEmailAndPassword(auth, emai, password)
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
}

    const logOutt = () => {
        return signOut(auth)
    }

    useEffect(() => {
      const subs = onAuthStateChanged(auth, (users)=>{
        setUser(users);
      });
      return ()=>{
        subs()
      }
    }, [])

    const authInfo = {
        user,
        createUser,
        login,
        logOutt,
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default RRouterProvider;