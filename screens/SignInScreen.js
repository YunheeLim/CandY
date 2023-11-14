import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default function SignInScreen({navigation}) {
  return (
      <View style={styles.container_SignInScreen}>
        <View style={styles.title}>
          <View style={styles.arrow}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </View>
          <View style={styles.container_title_text}>
            <Text style={styles.title_text}>Sign In</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.container_id}>
            <View style={styles.container_text_id}>
              <Text style={styles.text_id}>ID</Text>
              <TextInput style={styles.input_id}></TextInput>
            </View>
            <TouchableOpacity>
              <MaterialIcons name="cancel" size={20} color="#a4a4a4" />
            </TouchableOpacity>
          </View>
          <View style={{...styles.container_id, marginTop:20}}>
            <View style={styles.container_text_id}>
              <Text style={styles.text_id}>Password</Text>
              <TextInput style={styles.input_id} secureTextEntry={true}></TextInput>
            </View>
            <TouchableOpacity>
              <MaterialIcons name="cancel" size={20} color="#a4a4a4" />
            </TouchableOpacity>
          </View>

        </View>
        <TouchableOpacity 
            style={styles.submit_btn}
            // onPress={() => navigation.navigate('HomeScreen')}
          >
            <Text style={styles.submit_text}>Submit</Text>
          </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container_SignInScreen: {
    flex: 1,
  },
  title: {
    flex: 1.1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  arrow: {
    flex: 1,
  },
  container_title_text: {
    flex: 9,
    alignItems: 'center',
    paddingRight: 30,
  },
  title_text: {
    fontSize: 30,
    fontWeight: '600',
  },
  body: {
    flex: 8,
  },
  container_id: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: '#E6E6E6',
    borderRadius: 8,
  },
  container_text_id: {
    marginTop: -10,
  },
  text_id: {
    color: '#6e6e6e',
  },
  submit_btn: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 50,
    backgroundColor: '#000',
    borderRadius: 10,
  },
  submit_text:{
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  }
});