import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import "react-native-gesture-handler";
import { AntDesign } from '@expo/vector-icons';
import * as React from "react";
import * as Font from "expo-font";
// import CircularProgress from 'react-native-circular-progress-indicator';


export default function RecordScreen({navigation}) {
    
    // Manage values as states.
    const [place, setPlace] = useState("");

    // Set values as the value is typed.
    const onChangePlace = (val) =>{
        setPlace(val);
    }

    // make synchronize place value with onChangePlace function
    useEffect(() => {
        console.log(`Place: ${place}`);
    }, [onChangePlace]);

    return (
        <View style={styles.container_RecordScreen}>

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}
                    style={styles.arrow}
                >
                    <AntDesign name="arrowleft" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.header_text}>Record Working</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.container_where}>
                    <Text style={styles.where_text}>Where?</Text>
                    <TextInput 
                        onChangeText={onChangePlace}
                        value={place}
                        style={styles.input_box}
                    />
                </View>

                <View style={styles.container_timer}>
                    <View style={styles.circle_outside}>
                        <View style={styles.circle_inside}>
                            <Text style={styles.timer_text}>00:00:00</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.container_button}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btn_text}>Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btn_text}>Finish</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container_RecordScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 50,
    },
    arrow: {
        marginRight: 50,
    },
    header_text:{
        fontFamily: 'font-Bold',
        fontSize: 25,
        marginRight: 80,
    },
    body: {
        flex: 10,
    },
    container_where: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    where_text: {
        fontFamily: 'font-Medium',
        fontSize: 25,
    },
    input_box: {
        borderRadius: 10,
        marginLeft: 20,
        width: 180,
        paddingHorizontal: 10,
        paddingVertical: 12,
        flexShrink: 0,
        borderWidth: 0.5,
        borderStyle: "solid",
        borderColor: "#D0D0D0",   
    },
    container_timer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle_outside: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 240,
        height: 240,
        borderRadius: 120,
        backgroundColor: '#F2EFFB',
    },
    circle_inside: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: 'white',
    },
    timer_text: {
        fontFamily: 'font-Bold',
        fontSize: 30,
    },
    container_button: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        justifyContent: 'center',
        marginVertical: 75,
        marginHorizontal: 20,
        paddingHorizontal: 40,
        backgroundColor: '#000',
        borderRadius: 10,
        shadowOpacity: 0.5,
        shadowOffset: {width: 2, height: 2},
      },
    btn_text: {
        color: 'white',
        fontFamily: 'font-Medium',
        fontSize: 18,
    }
});