import initializeAuthentiction from "../Components/Firebase/Firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentiction();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // get user data user regitration from sign up page
  const userName = (e) => {
    setName(e.target.value);
  };
  const userEmail = (e) => {
    setEmail(e.target.value);
  };
  const userPassword = (e) => {
    setPassword(e.target.value);
  };

  // get user data from login page
  const getUserEmail = (e) => {
    setEmail(e.target.value);
  };
  const getUserPassword = (e) => {
    setPassword(e.target.value);
  };

  // update display name of user
  const setUserInfo = () => {
    updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        
      }).catch((error) => {
        setError(error.message)
      });
}


  // regitration with email and password
  const createUserWithEmail = (e) => {
    e.preventDefault();
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUserInfo();
        console.log(result.user);
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false))
  };


  // login with email and password
  const signInWithEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      setUser(result.user);
      setError("");
    })
    .catch(error => setError(error.message))
    .finally(() => setIsLoading(false))
  
  }


  // sign in with google
  const signInWithGoogle = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
  };


  // user logout
  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError("Something went wrong");
      })
      .finally(() => setIsLoading(false))
  };


  // get currently logged in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else{
        setUser({})
      }
      setIsLoading(false)
    });
  }, []);

  return {
    user,
    error,
    isLoading,
    signInWithGoogle,
    logOut,
    userName,
    userEmail,
    userPassword,
    getUserEmail,
    getUserPassword,
    createUserWithEmail,
    signInWithEmail
  };
};

export default useFirebase;
