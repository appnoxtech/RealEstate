import { StyleSheet,View,Platform } from 'react-native';
import { useState } from 'react';
import { responsiveScreenHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native';
import { dark } from '../../../../assets/Styles/GlobalTheme';

export default function CustomTextInput(props: any) {
  const [focus, setFocus] = useState(false);
  return (
    <View
      style={[
        styles.container,
        {borderColor: focus ? 'red' : 'rgba(0,0,0,0.5)'}
      ]}>
      <TextInput
        value={props?.value}
        onChangeText={(text: string) => props?.onChangeText(text)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={styles.textInput}
        placeholder={props?.placeholder}
        placeholderTextColor={dark}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:responsiveScreenHeight(6),
    width: '100%',
    marginVertical: responsiveScreenHeight(1),
    backgroundColor: '#DFDFDF',
    borderRadius: responsiveScreenWidth(1),
    paddingVertical: responsiveScreenHeight(1),
    paddingHorizontal: responsiveScreenWidth(2)
  },
  focused: {},
  notFocused: {},
  textInput: {
    color: dark,
    flex: 1,
  },
})