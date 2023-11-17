import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../Home/Home';
import Profile from "../profile/profile"
import Recommendation from '../Recommendation/Recommendation';
import RecordScreen from '../Record/Record';

import * as React from "react";
import * as Font from "expo-font";


function HomeScreen() {

    const Stack = createStackNavigator();

    return (
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="RecordScreen" component={RecordScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    )
  }
  
  function StatScreen() {
    return (
      <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontFamily:"font-ExtraBold", fontSize: 60}}> Just Testing... This is Home! </Text>
      </View>
    )
  }
  
  function RecommendScreen() {
    return (
      <Recommendation/>
    )
  }
  
  function ProfileScreen() {
    return (
      <Profile />
    )
  }
export default function Main({navigation}) {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen name="Statisitics" component={StatScreen} options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen name="Recommend" component={RecommendScreen} options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}></Tab.Screen>
      </Tab.Navigator>
    );
}