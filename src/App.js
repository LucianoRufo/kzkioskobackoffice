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
  apiKey: "AIzaSyCVWzkMyM9ijA6uKmdxi1MHPVFPtFwggRs",
  authDomain: "kaizen-kiosko.firebaseapp.com",
  databaseURL: "https://kaizen-kiosko.firebaseio.com",
  projectId: "kaizen-kiosko",
  storageBucket: "kaizen-kiosko.appspot.com",
  messagingSenderId: "87283938323",
  appId: "1:87283938323:web:806257d756742ea1323be6"
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
