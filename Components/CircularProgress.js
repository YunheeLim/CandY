import { StyleSheet, Text, View, TouchableOpacity, Dimensions, } from 'react-native';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import Svg, {Circle} from 'react-native-svg';
import Donut from './CircleProgress';

// Todo: Dummy Data
const data = [{
  percentage: 50,
  color: "#5B30E6",
  max: 100
}]



export default function CircularProgress({radius=60}) { // The radius can be changed.
      return (
        <View style={styles.container}>
          <StatusBar hidden/>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center'}}>
            {data.map((p, i) => {
              return <Donut key={i} percentage={p.percentage} color={p.color} delay={500 + 100 * i} max={p.max} radius={radius}/>
            })}
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 0,
    backgroundColor: '#fff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});