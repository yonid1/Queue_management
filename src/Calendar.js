import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
import moment from 'moment';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// import DatePicker from 'react-native-date-picker';

function MyCalendar({navigation, email}) {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [agenda, setAgenda] = useState(false);
  const [myDate, setMyDate] = useState();
  const [data, setData] = useState();
  const day = moment(data);
  console.log('myDate', date);
  console.log('email', email);
  console.log('moment', moment().format('YYYY-DD-MM'));
  const myTime = useCallback(async time => {
    const request = {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({num: '10/05/20'}),
    };
    try {
      await fetch('http://10.0.2.2.:5000/myname', request).then(res =>
        res
          // .text()
          .json()
          .then(d => setMyDate(d))
          .catch(err => {
            console.log('err', err);
          }),
      );
    } catch (err) {
      console.log('error', err);
    }
  }, []);

  return (
    <View>
      <Text style={styles.text}> Hello {email}</Text>

      <Button title="Go Back" onPress={() => navigation.push('Home')} />
      {/* <Calendar
        onDayPress={day => {
          console.log('selected day', day);
        }}
        markingType={'custom'}
        markedDates={{
          [date]: {
            // customStyles: {
            //   container: {backgroundColor: 'green'},
            //   text: {color: 'red'},
            // },
            // periods:[
            //   {startingDay:true,endingDay:true }
            // ],
            // disabled: true,
            // disableTouchEvent: true,
            // marked:true,
            // selected: true,
            // selectedColor: '#F1EFFE',
            // selectedTextColor: '#7954FA',
          },
        }}
      >
      </Calendar> */}
      <Agenda
      renderItem={(item)=>{
        return (<View>  <Text> {item.name}</Text>  </View> )
      }}
        items={{
          [data]: [{name: 'yoni'}],
        }}
        onCalendarToggled={calendarOpened => {
          console.log(calendarOpened);
        }}
      />
      {/* <Auth /> */}
      {/* <DatePicker
      
        minimumDate={new Date("2022-06-12T09:10")}
        date={date}
        // minuteInterval={20}
        onDateChange={setData}
      /> */}
      <Button title="send" onPress={() => myTime()}>
        {' '}
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    height: 50,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
  },
});
export default MyCalendar;
