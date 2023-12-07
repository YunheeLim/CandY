import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Animated,Dimensions, ScrollView, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as React from 'react';
import CircularProgress from '../../Components/CircularProgress';
import axios from 'axios';

// Todo: Dummy data
const places = [
    {key: 1, name:"HR", value:"97"}, 
    {key: 2, name:"HRV", value:"36"}, 
    {key: 3, name:"EDA", value:"97"},
    {key: 4, name:"Sleep Duration", value:"8"}
];

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get("window");

export default function SessionStatistics({route}) {
  const [sessionData, setSessionData] = React.useState({});
  const [concentValue, setConcentValue] = React.useState(0); 
  const [userId, setUserId] = React.useState("");

  axios({
    method: 'get',
    url: 'http://192.168.2.212/CandY_Server/Show_UserID/',
  }).then((response) => {
    ID = response.data.user_id
    setUserId(ID);
    console.log(userId)
    axios({
      method: 'get',
      url: `http://192.168.2.212/CandY_Server/Session_Report/${userId}/13/`,
    }).then((response) => {
      sessionsDatas = response.data.Session_Data_Avg
      setSessionData(sessionsDatas);
      console.log(sessionData.dictionary);
    }).catch(error => console.log(error));
  }).catch(error => console.log(error));
  
  return (
    <View style={styles.container_Stat}>
        <StatusBar style="auto"></StatusBar>
        <View style={styles.content_Container}>
            <View style={styles.cell}>
                <Text style={styles.section_text}>Concentration Score</Text>
                <CircularProgress/>
            </View>
        </View>
        <ScrollView style={{flex: 1,}}>
            {/* Usign data to build dynamic View */}
            {/*sessionData.map((p, i) => {
                return <View style={styles.cell_Session} key={i}>
                <Text style={styles.session_Text}>{p[0]}</Text>
                <View style={{flexDirection:'row', marginTop: 10, justifyContent: "space-around"}}>
                    <Text style={styles.place}>{p.value}</Text>
                    
                    <Text style={styles.time}>{p.name === "HR" ? "bpm": p.name === "HRV" ? "ms": p.name === "EDA" ? "µS" : "hours"}</Text>
                    <View style={{flex:2}}></View>
                </View>
            </View>
            })*/}
            
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container_Stat: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24
  },
  content_Container: {
    flex: 0.7,
    justifyContent: "space-around"
  },
  cell: {
    borderRadius: 18,
    minHeight: 240,
    flexShrink: 0,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "#D0D0D0",
    justifyContent: "center",
    alignItems: "center",
    
  },
  cell_Session: {
    flex: 1,
    borderRadius: 18,
    paddingHorizontal: 30,
    width: SCREEN_WIDTH - 48 ,
    minHeight: 102,
    flexShrink: 0,
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "#D0D0D0",
    justifyContent: "center",
    alignItems: "baseline",
    marginVertical: 10,
  },
  section_text: {
    fontSize: 18,
    fontWeight: 400,
    marginTop: 25,
    fontFamily:"font-Medium", 
  },
  section_subText: {
    fontFamily:"font-Medium",
    fontSize: 14,
    marginTop: 15,
    color: "#8B8B8B"
  },
  session_Text: {
    fontSize: 18,
    fontFamily:"font-Medium", 
  },
  place: {
    fontSize: 25,
    color: "#5B30E6",
    fontFamily: "font-Medium",
    alignSelf: "flex-end",
  },
  time: {
    fontSize: 14,
    color: "black",
    fontFamily: "font-Medium",
    marginLeft: 10,
    alignSelf:"flex-end",
    marginBottom: 2,
    
  }
});