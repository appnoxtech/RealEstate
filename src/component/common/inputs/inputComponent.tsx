import { StyleSheet,View } from 'react-native';
import { useState } from 'react';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native';

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
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(93),
    marginVertical: responsiveScreenHeight(1),
    borderWidth: 0,
    backgroundColor: '#DFDFDF',
    borderRadius: 3,
    padding: 10,
    fontSize: 12,
  },
  focused: {},
  notFocused: {},
  textInput: {
    flex: 1,
  },
})