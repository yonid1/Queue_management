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
import Time from './selectTime';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// import DatePicker from 'react-native-date-picker';

// import DatePicker from 'react-native-date-picker';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

// import TimePicker from 'react-time-picker';
// import {DatePickerModal} from 'react-native-paper-dates';
// import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';

function MyCalendar({navigation, email}) {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [agenda, setAgenda] = useState(false);
  const [myDate, setMyDate] = useState();
  const [data, setData] = useState();
  const [mode, SetMode] = useState('date');
  const [open, setOpen] = useState(true);
  const [shoeTime, setShowTime] = useState(false);
  // const Example = () => {
  const c = () => {
    console.log('c');
  };
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // console.log('isDatePickerVisible', isDatePickerVisible);

  console.log('open', open);
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
      {/* <Time/> */}
      {/* <Text style={styles.text}> Hello {email}</Text> */}

      {/* <Button title="Go Back" onPress={() => navigation.push('Home')} /> */}
      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}

      <Calendar
        style={styles.container}
        onDayPress={day => {
          setShowTime(true);
          console.log('selected day', day);
        }}
        markingType={'custom'}
        markedDates={{
          [date]: {
            // customStyles: {
                // container: {backgroundColor: 'green'},
                // text: {color: '#C71585'},
              // },
              // periods:[
                //   {startingDay:true,endingDay:true }
                // ],
                disabled: true, 
            // disableTouchEvent: true,
            // marked:true,
            // selected: true,
            // selectedColor: '#F1EFFE',
            // selectedTextColor: '#7954FA',
          },
        }}></Calendar>
        <Time />
      {/* <Agenda
        hideKnob={true}

      renderItem={(item)=>{
        return (<View>  <Text> {item.name}</Text>  </View> )
      }}
        items={{
          [data]: [{name: 'yoni'}],
        }}
        onCalendarToggled={calendarOpened => {
          console.log(calendarOpened);
        }}
        style={{
          width:"100%",
          height:"100%"
          // ba
        }} 
       /> */}
      {/* <Auth /> */}
      {/* <DatePicker
    
      // onDateChange={setOpen}
      // minimumDate
        // minimumDate={new Date("2022-06-12T09:10")}
        date={new Date()}
        mode="time"
        androidVariant='nativeAndroid'
        open={open}
        minuteInterval={20}
        is24hourSource='device'
        // minuteInterval={20}
        // onDateChange={setData}
      />  */}
      {/* <DateTimePicker
        timeZoneOffsetInMinutes={0}
        value={new Date()}
        mode="date"
        display="default"
        onChange={c}
      /> */}
      {/* <Button title="send" onPress={() => myTime()}> */}
      {/* </Button> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // top:-10,
    backgroundColor:'#40E0D0',
    // flex: 1,
  },
  text: {
    fontSize: 20,
    height: 50,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
  },
});
export default MyCalendar;
