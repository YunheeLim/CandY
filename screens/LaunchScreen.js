import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

export default function LaunchScreen({navigation}) {

  // const onSubmitPress = () => {
  //   return ;
  // }

  return (
    <View style={styles.container_LaunchScreen}>
      <View style={styles.container_LaunchScreen}>
        <Text style={styles.CandY_text}>CandY</Text>
        <Text style={styles.sub_text}>Concentration and You!</Text>
        <Image 
          source="https://i.pinimg.com/564x/21/92/e7/2192e7faff6fd0106191b68e3700cd79.jpg"
          style={{width: 200, height: 200, marginVertical: 40}}
        />
        <TouchableOpacity 
          style={styles.sign_in_btn}
          onPress={() => navigation.navigate('SignInScreen')}
        >
          <Text style={styles.sign_in_text}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sign_up_btn}>
          <Text style={styles.sign_up_text}>Don't you have an account?</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_LaunchScreen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CandY_text: { // 시간 되면 그라데이션.
    fontSize: 60,
    fontWeight: '700',
    color: '#5B30E6',
  },
  sub_text: {
    fontSize: 20,
    fontWeight: '500',
  },
  sign_in_btn: {
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 120,
    marginVertical: 10,
  },
  sign_in_text: {
    color: '#fff',
    fontSize: 20,
    fontWeight:'500',
  },
  sign_up_text:{
    textDecorationLine: 'underline',
    color: '#6e6e6e', 
  }

});