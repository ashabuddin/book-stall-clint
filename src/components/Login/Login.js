import { Button }from 'react-bootstrap';
import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig); 
    }

   
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then((result) => {       
          var credential = result.credential;
          var token = credential.accessToken;
          var user = result.user;      
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
    }
    return (
        <div>
            <Button onClick={handleGoogleSignIn} >GoogleSignIn</Button>
        </div>
    );
};

export default Login;