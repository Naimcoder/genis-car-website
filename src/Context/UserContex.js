import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';

export const  AuthContext= createContext();
       export const auth= getAuth(app)

const UserContex = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

const googleProvider = new GoogleAuthProvider()
const githubProvider= new GithubAuthProvider()


const createUser=(email,password)=>{
   setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn=(email,password)=>{
   setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
 const signInGoogle=()=>{
    return signInWithPopup(auth,googleProvider)
 }
 const signInGithub=()=>{
    return signInWithPopup(auth,githubProvider)
 }

 const resetPassword= (email)=>{
    return sendPasswordResetEmail(auth,email)
 }
 const logOut=()=>{
   localStorage.removeItem('genis-Car-Token')
    return signOut(auth)
 }

useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth,currentUser=>{
       setUser(currentUser)
      setLoading(false)
      console.log(currentUser)
    })
 return ()=>{
  return  unsubscribe()
 }
},[])
 const authInfo={user,loading,createUser,signIn,signInGoogle,signInGithub,resetPassword,logOut}

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContex;