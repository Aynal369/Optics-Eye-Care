import { useEffect, useState } from "react";
import firebaseInitialize from "../firebase/firebaseInitialize";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import swal from "sweetalert";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unSubscribe;
  }, [auth]);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        const newUser = { ...user, displayName: name }; // recommend
        setUser(newUser);
      })
      .catch((error) => {
        // An error occurred
      });
  };

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        swal("Alert!", "User LogOut Successfully", "warning");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    registerUser,
    updateUserName,
    logInUser,
    signInWithGoogle,
    handleSignOut,
  };
};

export default useFirebase;
