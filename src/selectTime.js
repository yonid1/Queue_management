import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
function SelectTime() {
  console.log("timer select");
  const [show, setShow] = useState(false);
  const [spaceMinutes, setSpaceMinutes] = useState(12);
  // const [isDisable, setIsDisable] = useState(false);
  // const [a, setA] = useState();
  console.log(show);
  const hour = [];
  const minute = [];
  const disabled = [1, 3, 12, 66];
  for (let i = 1; i < 24; i++) {
    hour.push(i);
  }
  for (let i = 0; i < 60; i += spaceMinutes) {
    minute.push(i);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHour}>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          {hour.map((item, index) => {
            return (
              <TouchableOpacity
                // delayPressIn={}
                disabled={disabled.includes(item)}
                style={
                  disabled.includes(item) ? styles.itemDisabled : styles.item
                }
                key={index}
                onPress={() => {
                  setShow(true);
                }}>
                <Text style={styles.text}> {item}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.containerMinute}>
        <ScrollView>
          {show &&
            minute.map((it, ix) => {
              console.log('it', it);
              return (
                <TouchableOpacity
                  style={styles.itemMinute}
                  key={ix}
                  onPress={() => {}}>
                  <Text style={styles.text}> {it}</Text>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
      {/* <ScrollView style={styles.containerMinute}> */}
      {/* </ScrollView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 10,
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: 'black',
  },

  container: {
    
    top: -10,
    // backgroundColor: 'pink',
    // alignItems: 'baseline',
    padding: 20,
    // flex: 0.3,
    paddingTop: 22,
    // paddingHorizontal: 150,
  },
  containerHour: {
    width: '23%',
    // alignSelf: 'stretch',
    // backgroundColor: 'blue',
    // marginHorizontal: 140,
    right: '-16%',
  },
  item: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'black',
    // backgroundColor: 'red',
    marginTop: 4,
    padding: 10,
    width: 80,
    right: 10,
  },
  itemDisabled: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#A9A9A9',
    // backgroundColor: 'red',
    marginTop: 4,
    padding: 10,
    width: 80,
    right: 10,
  },
  text: {
    fontSize: 30,
    color: 'red',
  },

  containerMinute: {
    // paddingLeft: -10,
    top: -270,
    // left: 150,
    // top:-100,
    width: '23%',
    // backgroundColor: '#FFFF00',
    // padding:40,
    // flex: 0.3,
    // paddingStart: -160,
    marginLeft: 200,
    // marginRight: 5,
    // paddingTop: 22,
    // paddingHorizontal: 140,
  },
  itemMinute: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'black',
    // width: 80,
    flex: 1,
    // backgroundColor: 'green',
    marginTop: 4,
    // padding: 10,
    paddingHorizontal: 14.3,
  },
  // text: {
  //   fontSize: 30,
  // },
});
export default SelectTime;
