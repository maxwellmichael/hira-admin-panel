import {
    FirebaseAuthProvider,
    FirebaseDataProvider,
    } from 'react-admin-firebase';
  
  const config = {
    apiKey: "AIzaSyAkzeCDkbf3eIkWd8bmAi9WcjJwqIoWAYc",
    authDomain: "hira-backend.firebaseapp.com",
    projectId: "hira-backend",
    storageBucket: "hira-backend.appspot.com",
    messagingSenderId: "940862859574",
    appId: "1:940862859574:web:e49695980680caa72f2b97",
    measurementId: "G-Q38QFRMTFE",
  }
  
  // All options are optional
  const options = {}
  
  export const dataProvider = FirebaseDataProvider(config, options);
  export const authProvider = FirebaseAuthProvider(config, options);
  