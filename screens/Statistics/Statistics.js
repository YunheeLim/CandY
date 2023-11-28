import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Platform , Button, Alert, Dimensions} from 'react-native';
import * as React from "react";
import {Calendar} from 'react-native-calendars';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get("window");

// Calendar Component
const MyCalendar = ({navigation}) => {
    return (
        <View style={styles.container}> 
            <Calendar 
            // Day Tap Action
                onDayPress={(day) => navigation.navigate("DailyStatistics", {id: day.dateString, navigation: navigation})}
                // Just Dummy Data
                markedDates={{ 
                    '2023-11-17': { selected: true}, 
                    '2023-11-18': { selected: true }, 
                    '2023-11-19': { 
                        selected: true,
                        activeOpacity: 0
                    }, 
                }} 
                theme={{ 
                    backgroundColor: '#ffffff', 
                    calendarBackground: '#ffffff', 
                    textSectionTitleColor: '#b6c1cd', 
                    selectedDayBackgroundColor: '#5B30E6', 
                    selectedDayTextColor: '#ffffff', 
                    todayTextColor: '#00adf5', 
                    dayTextColor: '#2d4150', 
                    textDisabledColor: '#d9e1e8', 
                    dotColor: '#00adf5', 
                    selectedDotColor: '#ffffff', 
                    arrowColor: 'black', 
                    monthTextColor: 'black', 
                    indicatorColor: 'blue', 
                    textDayFontFamily: 'font-Regular', 
                    textMonthFontFamily: 'font-Regular',  
                    textDayHeaderFontFamily: 'font-Bold',
                    textDayFontSize: 16, 
                    textMonthFontSize: 20, 
                    textDayHeaderFontSize: 14,
                    arrowStyle: {
                        width: 20, 
                        borderColor: "grey", 
                        borderWidth: 0.5, 
                        borderRadius: 5,
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    'stylesheet.day.basic': {
                        // Modifying the Day Style
                        'base': {
                            width: 30,
                            height: 50,
                            alignItems: "center",
                            justifyContent: 'center',
                        }
                    },

                }} 
                style={{
                    width:SCREEN_WIDTH,
                    margin:40,
                    flex: 1
                }}
            /> 
        </View> 
    )
}

export default function Statistics({navigation}) {
    return (
        <View style={{  
            flex: 1,  
            justifyContent: 'center',  
            alignItems: 'center',
            backgroundColor: 'white'
        }}> 
            <ExpoStatusBar style='auto' />
            {/* transfer navigation variables to Calendar */}
            <MyCalendar navigation={navigation} /> 
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
    width: SCREEN_WIDTH,
    marginTop: 40
  },
  input: {
    height: 40,
    margin: 12, 
    borderWidth: 1,
  },
  dateText: {
    margin: 16,
  }
});