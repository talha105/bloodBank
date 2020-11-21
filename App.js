  
import { StatusBar } from 'expo-status-bar';
import {Provider} from "react-redux";
import store from "./reducers"
import React,{useEffect} from 'react';
import {Container} from 'native-base';
import Login from './components/login/login';
import Routes from "./route/routes"

export default function App() {

  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}