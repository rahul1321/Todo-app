import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../components/About';
import { FontAwesome } from '@expo/vector-icons'; 
import { View } from 'react-native';

function AboutStack(props) {

    const Stack = createStackNavigator();
    const options={
        headerLeft: () => (
            <View style={{padding: 15,top:3}}>
                <FontAwesome name="list" size={24} color="#fff" onPress={() => props.navigation.toggleDrawer()} />
            </View>
        ),
        headerStyle: {
          backgroundColor: '#5663ba',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    return (
        <Stack.Navigator initialRouteName="About">
            <Stack.Screen name="About" component={About} options={options} />
        </Stack.Navigator>
    )
}

export default AboutStack
