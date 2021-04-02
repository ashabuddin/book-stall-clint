import { Button }from 'react-bootstrap';
import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig); 
    }

   
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then((result) => {       

          var user = result.user;  
          setLoggedInUser(user)  
          history.replace(from);
        }).catch((error) => { 
          var errorMessage = error.message;
        });
    }
    return (
        <div>
            <Button onClick={handleGoogleSignIn} >GoogleSignIn</Button>
        </div>
    );
};

export default Login;