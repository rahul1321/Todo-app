import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ItemList from '../components/ItemList';
import ItemDetails from '../components/ItemDetails';
import ItemEdit from '../components/ItemEdit';
import { FontAwesome } from '@expo/vector-icons'; 
import { View } from 'react-native';

function HomeStack(props) {

    const Stack = createStackNavigator();
    const options={
        headerStyle: {
          backgroundColor: '#5663ba',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }
    const optionsWithDrawer={
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
        <Stack.Navigator initialRouteName="MY TODO">
            <Stack.Screen name="MY TODO" component={ItemList} options={optionsWithDrawer} />
            <Stack.Screen name="Details" component={ItemDetails} options={options}/>
            <Stack.Screen name="Edit" component={ItemEdit} options={options}/>
          </Stack.Navigator>
    )
}

export default HomeStack
