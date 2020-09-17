import React,{useState} from 'react'
import { Text, View,StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

function ItemEdit({route}) {
    const {bodyText} = route.params;
    const [text, setText] = useState(bodyText);

    const editItem = (text)=>{
        setText(text);
    }
    const saveItem = () =>{
        alert('Successfully save');
    }
    return (
        <View style={styles.editContainer}>
            <View>
            <TextInput
                multiline
                style={styles.textInput}
                onChangeText={editItem}
                value={text}
            />
            </View>
            <View>
                <Button onPress={saveItem} title="Save"></Button>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    editContainer: {
        flex:1,
        padding: 20
    },
    textInput: {
        padding:8,
        height:250,
        borderColor: "#ddd",
        borderWidth: 1,
        fontSize: 18
    }
})

export default ItemEdit
