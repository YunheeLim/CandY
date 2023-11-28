import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LaunchScreen from './screens/onBoarding/LaunchScreen';
import SignInScreen from './screens/onBoarding/SignInScreen';
import SignUpScreen from './screens/onBoarding/SignUpScreen';
import Main from './screens/Main/main';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Profile from './screens/profile/profile';
import Recommendation from './screens/Recommendation/Recommendation';
import * as React from "react";
import * as Font from "expo-font";
// import mainFont from "./assets/Fonts";

export default function App() {
  const [fonts, fontError] = Font.useFonts({
    "font-Regular": require('./assets/Fonts/Pretendard-Regular.otf'),
    "font-Medium": require('./assets/Fonts/Pretendard-Medium.otf'),
    "font-Light": require('./assets/Fonts/Pretendard-Light.otf'),
    "font-Bold": require('./assets/Fonts/Pretendard-Bold.otf'),
    "font-SemiBold": require('./assets/Fonts/Pretendard-SemiBold.otf'),
    "font-ExtraBold": require('./assets/Fonts/Pretendard-ExtraBold.otf'),
  });

  const Stack = createStackNavigator();
  return (
    // for changing pages
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
