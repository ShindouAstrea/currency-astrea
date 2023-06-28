import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './src/pages/Main.page';
export default function App() {
  const Stack = createNativeStackNavigator();
  const change=()=>{

  }
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={MainPage}
            options={{
              headerTitleAlign: 'center',
              headerStyle:{
                backgroundColor: '#1f2a44',
                
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                
              },
            }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
  );
}
