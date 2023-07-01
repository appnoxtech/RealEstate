import { StyleSheet,View } from 'react-native';
import { useState } from 'react';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';

export default function TextInput(props) {
  const [focus, setFocus] = useState(props.focus);

  return (
    <View
      style={[
        styles.container,
        props.style,
        focus ? styles.focused : styles.notFocused,
      ]}>
      <TextInput
        setFocus={focus} 
        onChangeText={text => props.onChangeText(text)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={styles.textInput}
        placeholder={props.placeholder}
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
    width: responsiveScreenWidth(90),
    marginVertical: responsiveScreenHeight(1),
    borderWidth: 0,
    backgroundColor: '#D3D3D3',
    borderRadius: 3,
    padding: 10,
    fontSize: 12,
  },

})