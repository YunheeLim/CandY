import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Platform , Button, Alert, } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as Calendar from "expo-calendar";
import * as React from "react";
import { TextInput } from 'react-native-gesture-handler';
import CalendarPicker from 'react-native-calendar-picker';


export default function Statisitics({navigation}) {
    React.useEffect(() => {
        (async () => {
            const {status} = await Calendar.requestCalendarPermissionsAsync();
            if (status === 'granted') {
                const calendars = await Calendar.getCalendarsAsync (
                    Calendar.EntityTypes.EVENT
                );

            }
        })();
    }, []);
    async function getDefaultCalendarSource() {
        const calendars = await Calendar.getCalendarsAsync(
            Calendar.EntityTypes.EVENT
        );
        const defaultCalendars = calendars.filter(
            (each) => each.source.name === 'Default'
        );
        return defaultCalendars.length ? defaultCalendars[0].source : calendars[0].source;
    }

    async function createCalendar() {
        const defaultCalendarSource = Platform.OS === 'ios' ? await getDefaultCalendarSource() : {isLocalAccount: true, name: 'Expo calendar'};
        const newCalendarID = await Calendar.createCalendarAsync({
            title: "Expo Calendar",
            color: "blue",
            entityType: Calendar.EntityTypes.EVENT,
            sourceId: defaultCalendarSource.id,
            source: defaultCalendarSource,
            name: 'internalCalendarName',
            ownerAccount: 'personal',
            accessLevel: Calendar.CalendarAccessLevel.OWNER,
        });
        return newCalendarID;
    } 
    const [selectedStartDate, setSelectedStartDate] = React.useState(null);
    const startDate = selectedStartDate ? selectedStartDate.format('YYYY-MM-DD').toString(): '';
    
    const [friendNameText, setFriendNameText] = React.useState("");
    
    const addNewEvent = async () => {
        try {
            const calendarId = await createCalendar();

            const res = await Calendar.createEventAsync(calendarId, {
                endDate: getAppointmentDate(endDate),
                startDate: getAppointmentDate(startDate),
                title: "Happy Brithday buddy " + friendNameText,
            });
            Alert.alert("Event Created!");
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar style="auto"></StatusBar>
        <CalendarPicker onDateChange={setSelectedStartDate}></CalendarPicker>
        <TextInput
        onChangeText={setFriendNameText}
        value={friendNameText}
        placeholder='Enter the name of your Friend'
        style={styles.input}
         />
        <Button title='Add to Calendar' onPress={addNewEvent} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
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