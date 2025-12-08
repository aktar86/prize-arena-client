import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import useMode from "../hooks/useMode";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const { darkMode, toggleDarkMode } = useMode();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //sign in with google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //register user
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update user Profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  //observ user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  //signOutUser
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    registerUser,
    signInUser,
    googleLogin,
    logOut,
    toggleDarkMode,
    darkMode,
    updateUserProfile,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
