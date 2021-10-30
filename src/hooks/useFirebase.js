import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();

  //google login
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   const user = result.user;
    //   setUser(user);
    // })
    // .catch((error) => {
    //   setError(error.message);
    // });
  };

  //end of google login

  //observe the logged in user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  //end of observer

  //logOut
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    error,
    loginWithGoogle,
    logOut,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
