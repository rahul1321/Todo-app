import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ItemList from '../components/ItemList';
import ItemDetails from '../components/ItemDetails';
import ItemEdit from '../components/ItemEdit';
import About from '../components/About';

const Stack = createStackNavigator();

function Navigates() {
    return (
      <NavigationContainer>
      </NavigationContainer>
        
    )
}

export default Navigates
