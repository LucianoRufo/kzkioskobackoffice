//import * as firebase from "firebase";
import {
    FirebaseAuthProvider,
    FirebaseDataProvider,
    FirebaseRealTimeSaga
  } from 'react-admin-firebase';

const config = {
  apiKey: "AIzaSyCVWzkMyM9ijA6uKmdxi1MHPVFPtFwggRs",
  authDomain: "kaizen-kiosko.firebaseapp.com",
  databaseURL: "https://kaizen-kiosko.firebaseio.com",
  projectId: "kaizen-kiosko",
  storageBucket: "kaizen-kiosko.appspot.com",
  messagingSenderId: "87283938323",
  appId: "1:87283938323:web:806257d756742ea1323be6",
};


const options = {};
 
export default dataProvider = FirebaseDataProvider(config, options);