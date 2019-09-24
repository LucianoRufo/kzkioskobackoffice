import React from "react";
import "./App.css";
import { Admin, Resource } from "react-admin";
import { PurchaseList } from "./components/PurchaseList";
import { PurchaseEdit } from "./components/PurchaseEdit";
import { ItemList } from "./components/ItemList";
import { ItemEdit } from "./components/ItemEdit";

import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga
} from "react-admin-firebase";

const config = {
  apiKey: "AIzaSyCzVGkcoS8pGcftcYYSUr-gMHKrDzQ_zek",
  authDomain: "elkioskitodekaizen.firebaseapp.com",
  databaseURL: "https://elkioskitodekaizen.firebaseio.com",
  projectId: "elkioskitodekaizen",
  storageBucket: "elkioskitodekaizen.appspot.com",
  messagingSenderId: "651296690538",
  appId: "1:651296690538:web:9982ba6c9c6b7a17a79513"
};

const options = {};
const authProvider = FirebaseAuthProvider(config, options);
const dataProvider = FirebaseDataProvider(config, options);
const firebaseRealtime = FirebaseRealTimeSaga(dataProvider);

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      customSagas={[firebaseRealtime]}
    >
      <Resource name="purchases" list={PurchaseList} edit={PurchaseEdit} />
      <Resource name="items" list={ItemList} edit={ItemEdit} />
    </Admin>
  );
}

export default App;
