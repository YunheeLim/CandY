import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../profile/profile"
import Recommendation from '../Recommendation/Recommendation';
import Statistics from '../Statistics/Statistics';
import DailyStatistics from '../Statistics/DailyStatistics';
import LaunchScreen from '../onBoarding/LaunchScreen';
import Home from '../Home/Home';
import Bluetooth from '../Home/Bluetooth';
import RecordScreen from '../Record/Record';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import * as React from "react";
import * as Font from "expo-font";
import SessionStatistics from '../Statistics/SessionStatistics';


function HomeScreen() {

    const HomeStack = createStackNavigator();

    return (
      <HomeStack.Navigator initialRouteName="HomeScreen">
        <HomeStack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }}/>
        <HomeStack.Screen name="RecordScreen" component={RecordScreen} options={{ headerShown: false }}/>
        <HomeStack.Screen name="DailyStatistics" component={DailyStatistics} options={({route}) => ({
          title: `${route.params.id}`,
          headerBackTitleVisible: false,
          headerBackImage: () => (<AntDesign name="arrowleft" size={25} color="black" style={{marginLeft: 10}}/>),
        })} />
        <HomeStack.Screen name="SessionStatistics" component={SessionStatistics} options={({route}) => ({
          title: `Session ${route.params.id}`,
          headerBackTitleVisible: false,
          headerBackImage: () => (<AntDesign name="arrowleft" size={25} color="black" style={{marginLeft: 10}}/>),
        })} />
        <HomeStack.Screen name='Bluetooth' component={Bluetooth} options={({route}) => ({
          title: "Fitbit Device",
          headerBackTitleVisible: false,
          headerBackImage: () => (<AntDesign name="arrowleft" size={25} color="black" style={{marginLeft: 10}}/>)
        })}/>
      </HomeStack.Navigator>
    )
  }
  
  function RecommendScreen() {
    return (
      <Recommendation/>
    )
  }
  
  function ProfileScreen() {
    const ProfileStack = createStackNavigator();
    return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name = "ProfileScreen" component={Profile} options={{headerShown: false}} />
      </ProfileStack.Navigator>
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
          headerBackImage: () => (<AntDesign name="arrowleft" size={25} color="black" style={{marginLeft: 10}}/>),
        })} />
        {/* Get the information from previous screen */}
        <StatStack.Screen name="SessionStatistics" component={SessionStatistics} options={({route}) => ({
          title: `Session ${route.params.id}`,
          headerBackTitleVisible: false,
          headerBackImage: () => (<AntDesign name="arrowleft" size={25} color="black" style={{marginLeft: 10}}/>),
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
          tabBarIconStyle: {
            marginTop: 7,
          },
          tabBarLabelStyle: {
            fontFamily: 'font-Medium',
            fontSize: 10,
            marginVertical: 2,
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