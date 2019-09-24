import React from 'react';
import './App.css';
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser, UserMenu, AppBar, Layout } from 'react-admin';
import { UserList } from './components/UserList';
import { ItemList } from './components/ItemList';
import { PurchaseList } from './components/PurchaseList'
import { PurchaseCreate } from './components/PurchaseCreate'
import { PurchaseEdit } from './components/PurchaseEdit'

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

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
//const authProvider = FirebaseAuthProvider(config, options);
const  dataProvider = FirebaseDataProvider(config, options);
//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

//Bar with profile
const myCustomIconStyle = {
  avatar: {
      height: 30,
      width: 30,
  },
};
const MyCustomIcon = withStyles(myCustomIconStyle)(
  ({ classes }) => (
      <Avatar
          className={classes.avatar}
          src=""
      />
  )
);

const MyUserMenu = props => (<UserMenu {...props} icon={<MyCustomIcon />} />);
const MyAppBar = props => <AppBar {...props} userMenu={<MyUserMenu />} />;
const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;


//<Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
function App() {
  return (
    <Admin dataProvider={dataProvider} /*authProvider={authProvider}*/>
        <Resource name="purchases" list={PurchaseList} edit={PurchaseEdit} create={PurchaseCreate} show={ShowGuesser} />
        <Resource name="items" list={ItemList} />
        <Resource name="users" list={UserList} />
    </Admin>
  );
}

export default App;
