import React from 'react';
import { TouchableOpacity,View,StyleSheet ,Text} from 'react-native';
export default function CustomButton ({title}){
    return (
        <TouchableOpacity style={styles.container}>
            <View >
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0077c2',
        height: 50,
        padding: 10,
        borderRadius: 25,
    },
    text:{
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    }
})