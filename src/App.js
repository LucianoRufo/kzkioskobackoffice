import React from "react";
import "./App.css";
import { Admin, Resource } from "react-admin";
import { ItemList } from "./components/ItemList";
import { ItemEdit } from "./components/ItemEdit";
import { ItemCreate } from "./components/ItemCreate";
import { PurchaseList } from "./components/PurchaseList";
import { PurchaseCreate } from "./components/PurchaseCreate";
import { PurchaseEdit } from "./components/PurchaseEdit";
import { UserList } from './components/UserList'
import  CustomRoutes  from './routes/CustomRoutes'

import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga
} from "react-admin-firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID
};

const options = {};

const authProvider = FirebaseAuthProvider(config, options);
const dataProvider = FirebaseDataProvider(config, options);
const firebaseRealtime = FirebaseRealTimeSaga(dataProvider);

//<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      customSagas={[firebaseRealtime]}
      customRoutes={CustomRoutes}
    >
      <Resource
        name="purchases"
        list={PurchaseList}
        edit={PurchaseEdit}
        create={PurchaseCreate}
      />
      <Resource
        name="items"
        list={ItemList}
        edit={ItemEdit}
        create={ItemCreate}
      />
      <Resource
        name="users"
        list={UserList}
        />

    </Admin>
  );
}

export default App;
