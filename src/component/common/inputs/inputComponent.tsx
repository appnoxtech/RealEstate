import { StyleSheet,View,Platform, InputModeOptions } from 'react-native';
import { FC, useState } from 'react';
import { responsiveScreenHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native';
import { colorPrimary, dark } from '../../../../assets/Styles/GlobalTheme';


interface props {
  keyboardType?: InputModeOptions | undefined,
  value: string,
  onChangeText(text : string) : void,
  placeholder: string;
  errorText?: string;
  maxLength?: number
  
}

const CustomTextInput : FC<props> = ({maxLength,keyboardType = 'text', value, onChangeText, placeholder, errorText=''}) => {
  const [focus, setFocus] = useState(false);
  return (
    <View
      style={[
        styles.container,
        {borderColor: errorText ? 'red' : focus ? colorPrimary : 'rgba(0,0,0,0.5)'}
      ]}>
      <TextInput
        value={value}
        onChangeText={(text: string) => onChangeText(text)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={dark}
        inputMode={keyboardType}
        maxLength={maxLength}
      />
      
    </View>
  );
}
export default CustomTextInput
const styles = StyleSheet.create({
  container: {
    height:responsiveScreenHeight(7),
    width: '100%',
    marginVertical: responsiveScreenHeight(1),
    // backgroundColor: '#DFDFDF',
    borderRadius: responsiveScreenWidth(1),
    paddingVertical: responsiveScreenHeight(1),
    paddingHorizontal: responsiveScreenWidth(2),
    borderWidth: 0.5
  },
  focused: {},
  notFocused: {},
  textInput: {
    color: dark,
    flex: 1,
    paddingVertical: responsiveScreenHeight(1),
  },
})