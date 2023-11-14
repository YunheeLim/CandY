import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LaunchScreen from './screens/onBoarding/LaunchScreen';
import SignInScreen from './screens/onBoarding/SignInScreen';
import SignUpScreen from './screens/onBoarding/SignUpScreen';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from './screens/profile/profile'

export default function App() {
  const Stack = createStackNavigator();
  return (
    // <Profile />

    // for changing pages
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
