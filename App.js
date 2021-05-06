import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Platform, 
  Button, 
  Alert,
  Dimensions
} from 'react-native';

import {useDimentions, useDeviceOrientation} from '@react-native-community/hooks';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/LoginScreen";


const Stack = createStackNavigator();

const globalScreenOptions = {
  haederStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color : 'white' },
  headerTintColor: "white",
}

export default function App() {
  const {landscape} = useDeviceOrientation();

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='Login' component={LoginScreen} />
      </Stack.Navigator>       
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
