import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import "react-native-gesture-handler";
import * as React from "react";
import * as Font from "expo-font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import CircularProgress from 'react-native-circular-progress-indicator';

const ID = "teamhot";
const WELCOME_TEXT = "Good Morning,";
const SCORE = 50;

export default function Home({navigation}) {
    
    return (
      <View style={styles.container_Home}>

        <View style={styles.header}>
            <View style={styles.welcome}>
                <Text style={styles.welcome_text}>{WELCOME_TEXT}</Text>
                <Text style={styles.id_text}>{ID}</Text>
            </View>
            <View style={styles.watch_icon}>
                <TouchableOpacity
                    // onPress={() => {navigation.navigate('BluetoothScreen')}}
                >
                    <View style={styles.icon_circle}>
                        <MaterialCommunityIcons name="watch-variant" size={24} color="#5B30E6" style={{position: 'absolute'}}/>
                    </View>
                </TouchableOpacity>

            </View>
        </View>

        <View style={styles.body}>
            <View style={styles.cell}>
                <Text style={styles.concentration_score_text}>Concentration Score</Text>  
                <Text style={styles.for_yesterday_text}>for yesterday</Text>
                {/* todo: make progress bar in dynamic way. */}
                <View style={styles.circle_outside}>
                    <View style={styles.circle_inside}>
                        <Text style={styles.score}>{SCORE}</Text>
                    </View>
                </View>             
            </View>
            <View style={styles.container_record}>
                <TouchableOpacity style={styles.record_btn}>
                    <Text style={styles.record_text}>Record Working</Text>                    
                </TouchableOpacity>

            </View>
        </View>

      </View>
    );
}

const styles = StyleSheet.create({
    container_Home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 40,
        marginTop: 30,
    },
    welcome: {
        flex: 3,
        justifyContents: 'center',
    },
    welcome_text: {
        fontSize: 15,
        fontFamily: 'font-Regular',
        color: 'grey',
    },
    id_text: {
        marginTop: 3,
        fontSize: 25,
        fontFamily: 'font-Bold',
    },
    icon_circle: {     
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#D0D0D0",
    },
    watch_icon: {
        flex: 1,
        alignItems: 'flex-end',
    },
    body: {
        flex: 5,
        justifyContent: 'center',
    },
    cell: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        paddingHorizontal: 30,
        height: 240,
     flexShrink: 0,
        borderWidth: 0.5,
        borderStyle: "solid",
        borderColor: "#D0D0D0",   
    },
    concentration_score_text: {
        marginHorizontal: -70,
        fontSize: 20,
        fontFamily: 'font-Bold',
    },
    for_yesterday_text: {
        marginHorizontal: 80,
        marginBottom: 20,
        fontSize: 17,
        fontFamily: 'font-Regular',
        color: 'grey',
    },
    circle_outside: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: '#F2EFFB',
    },
    circle_inside: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'white',
    },
    score: {
        fontSize: 50,
        fontFamily: 'font-Bold',
    },
    container_record: {
        flex: 1,
        justifyContent: 'center',
    },
    record_btn: {
        backgroundColor: '#000',
        borderRadius: 10,
        paddingVertical: 18,
        marginVertical: 20,
        marginHorizontal: 50,
        alignItems: 'center',
        shadowOpacity: 0.5,
        shadowOffset: {width: 2, height: 2},
    },
    record_text: {
        color: 'white',
        fontFamily: 'font-Medium',
        fontSize: 18,
    },
});