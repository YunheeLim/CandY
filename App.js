import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LaunchScreen from './screens/LaunchScreen';
import SignInScreen from './screens/SignInScreen';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from './screens/profile/profile'

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Profile />
  );
}
