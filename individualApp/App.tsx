/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './components/homescreen';
import CameraView from './components/cameraView';

import Timer from "./components/timer.js";


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent'
          },
          headerTransparent: true,
          headerTitle: '',
        }}
      >
        <Stack.Screen 
          name='Home'
          options={({ navigation }) => ({
            headerShown: false,
            headerTransparent: true,
            headerTitle: '',
            headerRight: () => (
              <Timer 
                navigateToCamera={() => navigation.navigate('Camera')} 
              />
            ),
          })}
          component={HomeScreen}
        />
        <Stack.Screen
          name='Camera'
          component={CameraView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
