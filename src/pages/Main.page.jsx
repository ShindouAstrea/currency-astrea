import React from 'react';
import { View,StyleSheet, TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import CustomButton from '../components/Button.component';
import DropDown from '../components/DropDown.component';
export default function MainPage (){
    const [selected, setSelected] = React.useState([]);
    const Data = [ {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},];
      const data = ['USD', 'EUR', 'GBP', 'YENES','CLP','ZAR'];
    const handlerAmount = () =>{

    }

    return (
        <View style ={styles.container}>
           
            <DropDown />
            
            <CustomButton title='Realizar cambio'/>
            
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
        borderColor: 'black',
        
    }
  });
  