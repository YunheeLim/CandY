import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LaunchScreen from './screens/LaunchScreen';
import SignInScreen from './screens/SignInScreen';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Profile from './screens/profile/profile';
import Recommendation from './screens/Recommendation/Recommendation';
import * as React from "react";
import * as Font from "expo-font";
// import mainFont from "./assets/Fonts";

function HomeScreen() {
  return (
    <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontFamily:"font-Light", fontSize: 60}}> Just Testing... This is Home! </Text>
    </View>
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

export default function App() {
  const Tab = createBottomTabNavigator();
  const [fonts, fontError] = Font.useFonts({
    "font-Regular": require('./assets/Fonts/Pretendard-Regular.otf'),
    "font-Medium": require('./assets/Fonts/Pretendard-Medium.otf'),
    "font-Light": require('./assets/Fonts/Pretendard-Light.otf'),
    "font-Bold": require('./assets/Fonts/Pretendard-Bold.otf'),
    "font-SemiBold": require('./assets/Fonts/Pretendard-SemiBold.otf'),
    "font-ExtraBold": require('./assets/Fonts/Pretendard-ExtraBold.otf'),
  });

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen name="Statisitics" component={StatScreen} options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen name="Recommend" component={RecommendScreen} options={{headerShown: false}}></Tab.Screen>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
