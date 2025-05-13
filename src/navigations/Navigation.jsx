import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import BranchScreen from '../screens/BranchScreen';
import SemesterScreen from '../screens/SemesterScreen';
import SubjectScreen from '../screens/SubjectScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Engineers Adda'>
            <Stack.Screen name='Engineers Adda' component={HomeScreen}/>
            <Stack.Screen name='BranchScreen' component={BranchScreen} />
            <Stack.Screen name='SemesterScreen' component={SemesterScreen}/>
            <Stack.Screen name='SubjectScreen' component={SubjectScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation