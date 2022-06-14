import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import DatePicker from 'react-native-date-picker'
import { downIcon } from '../../assets/images';
import moment from 'moment';


const CustomDatePicker = (props) => {


  const [date, setDate] = useState(null);
  const [dateClicked, setDateClicked] = useState(false);

  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched, setFieldValue },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  return (
    <>
      <TouchableOpacity
        name="dateOfBirth"
        style={[
          styles.listContainer,
          hasError && styles.errorInput
        ]}
        onPress={() => {
          setDateClicked(!dateClicked)
        }}
      >
        {!dateClicked ? <Text style={styles.text1}>
          {date ? date.toDateString() : props.placeholder ? props.placeholder : new Date().toDateString()}
        </Text> :
          <Text style={styles.text1}>{props.placeholder ? props.placeholder : "Date of Birth"}</Text>
        }
        <Image resizeMode="contain" source={downIcon} style={[styles.downIcon2]} />
      </TouchableOpacity>
      {dateClicked && <View style={{ marginTop: 10 }}>
        <DatePicker
          date={date || new Date()}
          onDateChange={(newDate) => {
            setDate(newDate);
            props.onChangeData ? props.onChangeData(moment(newDate).format("YYYY-MM-DD")) : null
            //onChange(newDate.toDateString())
          }}
          mode="date"
          maximumDate={props.maximumDate === null ? props.maximumDate : new Date()}
        />
      </View>}
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  )
}

export default CustomDatePicker