

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import CustomTextInput from '../../common/inputs/inputComponent';


const data = [
  { label: 'India', value: 'IN' },
  { label: 'United States', value: 'US' },
  { label: 'United Kingdom', value: 'UK' },
  { label: 'Indonesia', value: 'ID' },
  { label: 'Norway', value: 'NO' },
  { label: 'South Africa', value: 'ZA' },
  { label: 'Spain', value: 'ES' },
  { label: 'Switzerland', value: 'CH' },
];


const DropdownComponent = () => {
  const [countryValue, setCountryValue] = useState(null);
  const [stateValue, setStateValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false)

  const renderLabel = () => {
    if (countryValue || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Select Country
        </Text>
      );
    } 
    return null;
  };
  const renderLabel1 = () => {
    if( stateValue || isFocus1) {
      return(
        <Text style={[styles.label, isFocus1 && { color: 'blue' }]}>Select State</Text>
      );
    }
    return null;
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Country' : '...'}
        searchPlaceholder="Search..."
        value={countryValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setCountryValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
    <View style={styles.container}>
      {renderLabel1()}
      <Dropdown
        style={[styles.dropdown, isFocus1 && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus1 ? 'Select State' : '...'}
        searchPlaceholder="Search..."
        value={stateValue}
        onFocus={() => setIsFocus1(true)}
        onBlur={() => setIsFocus1(false)}
        onChange={item => {
          setStateValue(item.value);
          setIsFocus1(false);
        }}
      />
    </View>
    </SafeAreaView>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
