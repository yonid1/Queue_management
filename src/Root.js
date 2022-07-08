import React, {useState, useEffect} from 'react';
import App from './App';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Time from './selectTime'

const Stack = createNativeStackNavigator();

function Root() {
  return (<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} />
      </Stack.Navigator>
{/* <Time/> */}
    
    </NavigationContainer>  );

}
export default Root;
