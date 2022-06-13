import React, {useState, useEffect} from 'react';
import App from './App';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Root;
