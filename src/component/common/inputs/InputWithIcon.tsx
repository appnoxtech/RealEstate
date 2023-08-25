import {StyleSheet, TextInput,Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import LoadIcon from '../LoadIcon';
import {
  responsiveFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {colorPrimary, dark} from '../../../../assets/Styles/GlobalTheme';


interface props {
  errorText: string;
  value: string;
  placeholder: string;
  onTextChangeHandler(text: string): any;
  id: string;
  iconName: string,
  iconFamily: string,
  iconStyle: {},
  iconColor: string
}

const InputWithIcon: FC<props> = ({
  errorText,
  value,
  placeholder,
  onTextChangeHandler,
  id,
  iconColor,
  iconFamily,
  iconName,
  iconStyle
}) => {
  const [focus, setFoucs] = useState(false);

  return (
    <>
      <View
        style={
            errorText ? styles.inputContainer1 : focus ? styles.focusInputContainer  : styles.inputContainer
        }>
        <TextInput
          id={id}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={dark}
          value={value}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={value => onTextChangeHandler(value)}
          onFocus={() => setFoucs(true)}
          onBlur={() => setFoucs(false)}
        />
        <LoadIcon
          iconFamily={iconFamily}
          iconName={iconName}
          color={iconColor}
          style={iconStyle}
          size={responsiveFontSize(3)}
        />
      </View>
      {errorText ? (
        <Text style={styles.errorText}>{errorText}</Text>
      ) : null}
    </>
  );
};

export default InputWithIcon;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveScreenHeight(7),
    width: '99%',
    marginVertical: responsiveScreenHeight(1),
    borderWidth: 0,
    backgroundColor: '#F5F4F8',
    borderColor: '#F5F4F8',
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
  },
  focusInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveScreenHeight(7),
    width: '99%',
    marginVertical: responsiveScreenHeight(1),
    borderWidth: 1,
    backgroundColor: '#F5F4F8',
    borderColor: colorPrimary,
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
  },
  inputContainer1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    height: responsiveScreenHeight(7),
    width: '99%',
    marginVertical: responsiveScreenHeight(1),
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#F5F4F8',
    borderRadius: 3,
    padding: 10,
    fontSize: 12,
  },
  input: {
    flex: 1,
    paddingVertical: responsiveScreenHeight(1),
    color: dark,
    backgroundColor: '#F5F4F8',
  },
  errorText: {
    fontSize: responsiveFontSize(1.5),
    color: 'red',
    textAlign: 'right',
  },
});
