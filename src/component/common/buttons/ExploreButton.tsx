import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

export default function ExploreButton({ title, onPress}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={{color: 'white'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8BC83F',
    borderRadius: 5,
    backgroundColor: '#8BC83F',
    paddingHorizontal: responsiveScreenHeight(3),
    paddingVertical: responsiveScreenHeight(1.5)
  },
});
