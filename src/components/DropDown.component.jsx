import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ScrollView,Image,Text,View,StyleSheet,TextInput} from 'react-native';
import dropDownIcon from './../../assets/arrow-icon.svg';
export default function DropDown (){
    const data = ['USD', 'EUR', 'GBP', 'YENES','CLP','ZAR'];
    const [show,setShow] = React.useState(false);
    const handlerDiv= ()=>{
        setShow(!show);
    }
    return (

            <View styles={styles.container}>
                <TouchableOpacity style={styles.dropDown}>
                    <Text>Choose an option</Text>
                </TouchableOpacity>
            </View>

    )
 
}
const styles = StyleSheet.create({
    container:{
        borderColor: 'black',
       textAlign:'center',
       alignContent: 'center',
       justifyContent: 'center',
    },
    input:{
        textAlign:'center',
        justifyContent:'center',
        borderColor:'black',
        borderWidth: 1,
        backgroundColor:'black'
    },
    item:{

    },
    text:{
        color:'black'
    },
    dropDown:{
        backgroundColor:'#a9a9a9',
        minHeight: 40,
        padding: 8,
        borderRadius: 5,
        justifyContent: 'center',
        textAlign:'center',
        alignItems: 'center',
        margin: 10,
        fontSize:18

    }
})