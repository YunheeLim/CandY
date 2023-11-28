import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Animated,Dimensions, ScrollView, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as React from 'react';
import CircularProgress from '../../Components/CircularProgress';
import SessionStatistics from './SessionStatistics';

const places = [
    {id: 1, name:"Starbucks", times:"10:00 a.m."}, 
    {id: 2, name:"K-Sqaure", times:"1:34 p.m."}, 
    {id: 3, name:"Lark", times:"9:54 p.m."}
];
const concentValue = 50;
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get("window");

export default function DailyStatistics({navigation}) {
    const springValue = React.useRef(new Animated.Value(0)).current;
    const springAnimation = () => {
        Animated.spring(springValue, {
            toValue: concentValue
        })
    }

  return (
    <View style={styles.container_Stat}>
        <StatusBar style="auto"></StatusBar>
        <View style={styles.content_Container}>
            <View style={styles.cell}>
                <Text style={styles.section_text}>Concentration Score</Text>
                <Text style={styles.section_subText}>on average</Text>
                <CircularProgress/>
            </View>
        </View>
        <ScrollView style={{flex: 1,}}>
            {places.map((p, i) => {
                return <View style={styles.cell_Session}>
                <Text style={styles.session_Text}>Session {i + 1}</Text>
                <View style={{flexDirection:'row', marginTop: 10, justifyContent: "space-around"}}>
                    <Text style={styles.place}>{p.name}</Text>
                    <Text style={styles.time}>{p.times}</Text>
                    <View style={{flex:2}}></View>
                    <TouchableOpacity style={{flex:0}} onPress={() => navigation.navigate("SessionStatistics", {id:i + 1})}>
                    <Entypo name="chevron-right" size={30} color="grey" />
                    </TouchableOpacity>
                </View>
            </View>
            })}
            
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
    flex: 1,
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
    marginVertical: 20,
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
    color: "#8B8B8B",
    fontFamily: "font-Medium",
    marginLeft: 10,
    alignSelf:"flex-end",
    marginBottom: 2,
    
  }
});