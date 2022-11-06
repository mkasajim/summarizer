import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, SafeAreaView } from 'react-native';

import Home from './screens/Home';
import Ocr from './screens/Ocr';
import Details from './screens/Details';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar barStyle={'light-content'} />
    <NavigationContainer>
      <Stack.Navigator initialRoutename="Home">
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}}/>
        <Stack.Screen name="Ocr" component={Ocr} options={{title: "Scanned Text"}}/>
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
