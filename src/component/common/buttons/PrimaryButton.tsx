import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { useSelector } from 'react-redux';

interface props {
  label: string;
  onPresshandler(): any
}

const PrimaryButton: FC<props> = ({label, onPresshandler}) => {
  const {isLoading} = useSelector((store: any) => store.common);
  if(isLoading){
    <View style={[styles.btnContainer, {backgroundColor: 'rgba(0,0,0,0.3)'}]}>
       <ActivityIndicator color={'#8BC83F'} size={'small'} />
    </View>
  }
  return (
    <TouchableOpacity onPress={onPresshandler} style={styles.btnContainer}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#8BC83F',
    paddingVertical: responsiveScreenHeight(2),
    backgroundColor: '#8BC83F',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 16,
  },
});
