import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../profile/profile"
import Recommendation from '../Recommendation/Recommendation';
import Statistics from '../Statistics/Statistics';
import DailyStatistics from '../Statistics/DailyStatistics';
import * as React from "react";
import * as Font from "expo-font";
import SessionStatistics from '../Statistics/SessionStatistics';


function HomeScreen() {
    return (
      <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontFamily:"font-Light", fontSize: 60}}> Just Testing... This is Home! </Text>
      </View>
    )
  }
  
  function StatScreen() {
    return (
      <Statistics />
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
  function StatNavigator() {
    const StatStack = createStackNavigator();
    return (
      <StatStack.Navigator>
        <StatStack.Screen name="Statistics" component={Statistics} options={{headerShown: false}} />
        <StatStack.Screen name='DailyStatistics' component={DailyStatistics} options={({route}) => ({
          title: `${route.params.id}`,
          headerBackTitleVisible: false,
        })} />
        <StatStack.Screen name="SessionStatistics" component={SessionStatistics} options={({route}) => ({
          title: `Session ${route.params.id}`,
          headerBackTitleVisible: false,
        })} />
      </StatStack.Navigator>
    )
  }
export default function Main() {
    const Tab = createBottomTabNavigator();
    
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen name="Statistics" component={StatNavigator} options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen name="Recommend" component={RecommendScreen} options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}></Tab.Screen>
      </Tab.Navigator>
    );
}