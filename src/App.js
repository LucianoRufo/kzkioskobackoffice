import React from "react";
import "./App.css";
import { Admin, Resource, UserMenu, AppBar, Layout } from "react-admin";
import { ItemList } from "./components/ItemList";
import { ItemEdit } from "./components/ItemEdit";
import { ItemCreate } from "./components/ItemCreate";
import { PurchaseList } from "./components/PurchaseList";
import { PurchaseCreate } from "./components/PurchaseCreate";
import { PurchaseEdit } from "./components/PurchaseEdit";

import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

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

//Bar with profile
const myCustomIconStyle = {
  avatar: {
    height: 30,
    width: 30
  }
};
const MyCustomIcon = withStyles(myCustomIconStyle)(({ classes }) => (
  <Avatar className={classes.avatar} src="" />
));

const MyUserMenu = props => <UserMenu {...props} icon={<MyCustomIcon />} />;
const MyAppBar = props => <AppBar {...props} userMenu={<MyUserMenu />} />;
const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;

//<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      customSagas={[firebaseRealtime]}
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
    </Admin>
  );
}

export default App;
