import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { UserList } from './components/UserList';
import jsonServerProvider from 'ra-data-json-server';

//import dataProvider from "./firebaseConfig";
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
const authProvider = FirebaseAuthProvider(config, options);
const  dataProvider = FirebaseDataProvider(config, options);
//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="purchases" list={ListGuesser} />
        <Resource name="items" list={ListGuesser} />
        <Resource name="users" list={ListGuesser} />

    </Admin>
  );
}

export default App;
