import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default function SignUpScreen({navigation}) {


  const [id, onChangeId] = useState("");
  const [id_warning, setId_warning] = useState("");
  const [password, onChangePassword] = useState("");
  const [password_warning, setPassword_warning] = useState("")
  const [confirm_pw, onChangeConfirm_pw] = useState("");
  const [confirm_pw_warning, setConfirm_pw_warning] = useState("");

  
  // Make error when each fields are not valid.
  // todo: make it in dynamic way whenever the text changes.
  const handleWarning = () => {

    if(id === "") { 
      setId_warning("Please enter your ID.");
    }
    if(password === ""){
      setPassword_warning("Please enter your password.");
    }
    if(password !== confirm_pw){
      setConfirm_pw_warning("Your password and confirmation password must match.");
    }
  };

  // check whether all fields are valid when submit button is clicked.
  const validcheck = (id, password, confirm_pw) => {
    if(id !== "" && password !== "" && password === confirm_pw){
      navigation.removeListener;
      navigation.navigate('SignInScreen');
    }
  }

  return (
      <View style={styles.container_SignInScreen}>
        <View style={styles.title}>
          <View style={styles.arrow}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LaunchScreen')}
            >
              <AntDesign name="arrowleft" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.container_title_text}>
            <Text style={styles.title_text}>Sign Up</Text>
          </View>
        </View>

        <View style={styles.body}>

          <View style={styles.container_id}>
            <View style={styles.container_text_id}>
              <Text style={styles.text_id}>ID</Text>
              <TextInput
                onChangeText={onChangeId}
                text={id}
                style={styles.input_id}
              />
            </View>
            <TouchableOpacity>
              <MaterialIcons name="cancel" size={20} color="#a4a4a4" />
            </TouchableOpacity>
          </View>
          <Text style={styles.warning}>{id_warning}</Text>

          <View style={{...styles.container_id, marginTop:10}}>
            <View style={styles.container_text_id}>
              <Text style={styles.text_id}>Password</Text>
              <TextInput 
                onChangeText={onChangePassword}
                text={password}
                style={styles.input_id} 
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity>
              <MaterialIcons name="cancel" size={20} color="#a4a4a4" />
            </TouchableOpacity>
          </View>
          <Text style={styles.warning}>{password_warning}</Text>

          <View style={{...styles.container_id, marginTop:10}}>
            <View style={styles.container_text_id}>
              <Text style={styles.text_id}>Confirm password</Text>
              <TextInput 
                onChangeText={onChangeConfirm_pw}
                text={confirm_pw}
                style={styles.input_id} 
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity>
              <MaterialIcons name="cancel" size={20} color="#a4a4a4" />
            </TouchableOpacity>
          </View>
          <Text style={styles.warning}>{confirm_pw_warning}</Text>


        </View>
        <TouchableOpacity 
            style={styles.submit_btn}
            onPress={() => {
              console.log(id, password, confirm_pw);
              handleWarning();
              validcheck();
            }}
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
  },
  warning: {
    color: 'red',
    marginHorizontal: 20,
  }
});