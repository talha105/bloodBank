import { StatusBar } from 'expo-status-bar';
import {Provider} from "react-redux";
import store from "./reducers"
import React from 'react';
import {Container} from 'native-base';
import Login from './components/login/login';


export default function App() {
  return (
    <Provider store={store}>
    <Container>
      <Login/>
    </Container>
    </Provider>
  );
}


