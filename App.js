import { StatusBar } from 'expo-status-bar';
import {Provider} from "react-redux";
import store from "./reducers"
import React,{useEffect} from 'react';
import {Container} from 'native-base';
import firebase from "firebase"
import Login from './components/login/login';
import Routes from "./route/routes"

export default function App() {
  useEffect(()=>{
    var firebaseConfig = {
      apiKey: "AIzaSyDNRQ0DxaK1OHZVnnNw9cuAFmzY___arQc",
      authDomain: "tracker-3b91c.firebaseapp.com",
      databaseURL: "https://tracker-3b91c.firebaseio.com",
      projectId: "tracker-3b91c",
      storageBucket: "tracker-3b91c.appspot.com",
      messagingSenderId: "285083987468",
      appId: "1:285083987468:web:b1b507db0c5f0919a4c829"
    };
    firebase.initializeApp(firebaseConfig)
  })
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}


