import Axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';

function ItemDetails(props) {
    const {route,navigation} = props;
    const { itemId } = route.params;
    const [item, setItem] = useState({});
    
    useEffect(() => {
       Axios.get('https://jsonplaceholder.typicode.com/posts/'+itemId)
       .then(res=>{
            setItem(res.data);
       })
        
    }, []);

    const editPress =()=>{
        navigation.navigate('Edit',{bodyText:item.body});
    }
    return (
        <View style={styles.detailsContainer}>
            <View style={styles.editButtonContainer}>
                <Button title="Edit" onPress={editPress}></Button>
            </View>
            <View>
                <Text style={styles.textStyle}>{item.body}</Text>
            </View>
            
        </View>
        
    )
}

export default ItemDetails

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        padding: 10
    },
    textStyle: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 28,
        alignItems: "center",
        marginTop: 25,
        padding: 20,
        borderColor : "#ddd",
        borderWidth: 1,

    },
    editButtonContainer:{
        margin: 10,
    }
})
