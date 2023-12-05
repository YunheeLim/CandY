import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../profile/profile"
import Recommendation from '../Recommendation/Recommendation';
import Statistics from '../Statistics/Statistics';
import DailyStatistics from '../Statistics/DailyStatistics';
import Home from '../Home/Home';
import RecordScreen from '../Record/Record';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import * as React from "react";
import * as Font from "expo-font";
import SessionStatistics from '../Statistics/SessionStatistics';


function HomeScreen() {

    const Stack = createStackNavigator();

    return (
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="RecordScreen" component={RecordScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DailyStatistics" component={DailyStatistics} options={({route}) => ({
          title: `${route.params.id}`,
          headerBackTitleVisible: false,
        })} />
      </Stack.Navigator>
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
  // Build Statistics Navigator Stack and Register the screens
  function StatNavigator() {
    const StatStack = createStackNavigator();
    return (
      <StatStack.Navigator>
        <StatStack.Screen name="Statistics" component={Statistics} options={{headerShown: false}} />
        {/* Get the information from previous screen */}
        <StatStack.Screen name='DailyStatistics' component={DailyStatistics} options={({route}) => ({
          title: `${route.params.id}`,
          headerBackTitleVisible: false,
        })} />
        {/* Get the information from previous screen */}
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
      <Tab.Navigator
        screenOptions={()=>({
          tabBarActiveTintColor: '#5B30E6',
          tabBarLabelStyle: {
            fontFamily: 'font-Medium',
            fontSize: 12,
          },
        })}
      >
        <Tab.Screen
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: false, 
            tabBarIcon: ({color, size}) => (<Entypo name="home" size={24} color={color}/>),
          }}
        />
        <Tab.Screen 
          name="Statistics" 
          component={StatNavigator} 
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (<Ionicons name="stats-chart" size={24} color={color} />),
          }}
        />
        <Tab.Screen 
          name="Recommend" 
          component={RecommendScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (<Entypo name="thumbs-up" size={24} color={color} />),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (<Ionicons name="person" size={24} color={color} />),
          }}
        />
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
});