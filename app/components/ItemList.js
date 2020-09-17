import React, {useEffect} from 'react'
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Button } from 'react-native';
import Header from './Header';
import { connect } from 'react-redux';
import actionTypes from '../actions/actionTypes';
import { AntDesign } from '@expo/vector-icons'; 

function ItemList(props) {
    useEffect(() => {
        props.fetchTodos();
    }, []);

    const Item = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} 
            onPress={() => {
                props.navigation.navigate('Details', {
                    itemId: item.id
                });
            }}
        >
          <AntDesign name="find" size={24} color="black" /> 
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );
    
    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    const openDrawer=()=>{
        props.navigation.openDrawer();
    }

    return (
       <View style={styles.container}>
           <View>
               <FlatList
                    style={styles.listContainer} 
                    data={props.todos}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
               >
               </FlatList>
           </View>
       </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    itemContainer: {
        flexDirection: "row",
        padding: 20,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 1,
    },
    title : {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 8,
        top: -3
    },
    listContainer: {
        padding: 4
    }
})

const mapStateToProps = (state) => {
    return {
      todos: state.todoReducer.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodos : ()=> {
            dispatch({type: actionTypes.TODO_FETCH_REQUEST});
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemList)
