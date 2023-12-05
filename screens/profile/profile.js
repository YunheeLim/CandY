import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Image } from 'expo-image';
import { Entypo } from '@expo/vector-icons';

const ID = "teamhot"

export default function Profile({navigation}) {

    const buildSeparator = () => {
        return <View style={styles.separator} />;
    };

  return (
    <View style={styles.container_Profile}>
        <StatusBar style="auto" />
        <View style={styles.header}>
            <Text style={styles.profile_text}>
                My account
            </Text>
        </View>
      <View style={styles.cell}>
        <Text style={styles.sub_text}>
            ID
        </Text>
        <Text style={{...styles.sub_text, color:"grey"}}>
            {ID}
        </Text>
      </View>
      <View style={styles.separator}></View>
      <TouchableOpacity style={styles.cell}>
        <Text style={styles.sub_text}>
            Log out
        </Text>
        <TouchableOpacity>
            <Entypo name="chevron-right" size={20} color="grey" />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.separator}></View>
      <TouchableOpacity style={styles.cell}>
        <Text style={{...styles.sub_text, color:"red"}}>
            Delete the account
        </Text>
        <TouchableOpacity>
        <Entypo name="chevron-right" size={20} color="grey" />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.separator}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container_Profile: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  sub_text: {
    fontSize: 16,
    fontFamily: 'font-Medium',
  },
  profile_text: {
    color: "black",
    fontSize: 20,
    fontFamily: 'font-Bold',
  },
  separator: {
    height: 1,
    backgroundColor: "grey",
    marginHorizontal: 10,
    opacity: 0.2
  },
  cell: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 57,
  },
  header: {
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 20,
  }
});