import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from "react-redux";
import DrawerLayout from './app/navigates/DrawerLayout';
import Navigates from './app/navigates/navigates';
import store from "./app/store";

export default function App() {
  return (
    <Provider store={store}>

        <DrawerLayout/>
        
    </Provider>
  );
}
