import {StyleSheet, Text, View} from 'react-native';
import React, { FC, RefObject } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import LoadIcon from '../LoadIcon';
import { white } from '../../../../assets/Styles/GlobalTheme';


interface props {
    data: Array<any>,
    onSelectHandler(selectedItem: any): any,
    id: string,
    placeholder: string,
    innerRef: RefObject<SelectDropdown>,
    defaultValue: string
};

const Dropdown:FC<props> = ({data, onSelectHandler, id, placeholder, innerRef, defaultValue}) => {
  return (
    <SelectDropdown
      ref={innerRef}
      data={data}
      renderDropdownIcon={() => (
        <LoadIcon
          iconFamily="MaterialIcons"
          iconName="keyboard-arrow-down"
          style={{}}
          color="rgba(17, 17, 17, 0.12)"
          size={35}
        />
      )}
      dropdownStyle={styles.dropdown}
      rowTextStyle={styles.rowText}
      buttonStyle={styles.inputContainer}
      searchInputStyle={styles.input}
      defaultButtonText={placeholder}
      buttonTextStyle={{
        textAlign: 'left',
        fontSize: responsiveFontSize(2.3),
      }}
      defaultValue={defaultValue}
      onSelect={(selectedItem: any, index) => {
        onSelectHandler(selectedItem[id])
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem[id];
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item[id];
      }}
    />
  );
};

export default Dropdown;

const styles = StyleSheet.create({
    dropdown: {
        marginTop: responsiveScreenHeight(0.5),
        borderRadius: responsiveScreenHeight(1.5),
    },
    rowText: {
        fontSize: responsiveFontSize(2.5),
        textAlign: 'left',
    },
    inputContainer: {
        width: '100%',
        borderRadius: responsiveScreenHeight(1),
        paddingHorizontal: responsiveScreenWidth(1),
        height: responsiveScreenHeight(7),
        backgroundColor: white,
        borderColor: 'rgba(17, 17, 17, 0.12)',
        borderWidth: 2,
        marginBottom: responsiveScreenHeight(1),
    },
    input: {
        flex: 1,
        backgroundColor: 'blue',
    },
});







