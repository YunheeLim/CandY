import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function SignInScreen() {
  return (
    <View style={styles.container_SignInScreen}>
      <View style={styles.container_SignInScreen}>
        <View style={styles.title}>
            <AntDesign name="arrowleft" size={24} color="black" />
            <Text>Sign In</Text>
        </View>
        <View style={styles.body}>
            <Text>body</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_SignInScreen: {
    flex:1,
    backgroundColor: '#6e6e6e',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 150,
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  body: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  }
});
