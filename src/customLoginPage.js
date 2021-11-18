import React from "react";
import { Login, LoginForm } from "react-admin";
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';



const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '#/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
};

const SignInScreen = () => <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>;


const CustomLoginForm = props =>{ 

  return (
    <div>
      <LoginForm {...props} />
      <SignInScreen />
    </div>
  )
}

const CustomLoginPage = props => {
  return (
    <Login {...props} >
      <CustomLoginForm />
    </Login>
  );
}

export default CustomLoginPage;