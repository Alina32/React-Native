import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import DetailsPhoto from './src/Screens/DetailsPhoto';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: 'teal',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}
        />
        <Stack.Screen
          name="Photo"
          component={DetailsPhoto}
          options={({ route }) => ({ title: route.params.title,
            headerStyle: {
                backgroundColor: 'teal',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
              fontWeight: 'bold',
            }})
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
