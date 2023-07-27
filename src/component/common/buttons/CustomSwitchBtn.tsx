import {SafeAreaView, StyleSheet, Switch, Text, View} from 'react-native';
import React, {FC, useState} from 'react';


interface props {
    trackColor: {
        false: string,
        true: string
    } ;
    thumbColor: string;
    onValueChange(toggleSwitch: boolean) : any,
    value: boolean
}
const CustomSwitchBtn:FC<props> = ({trackColor, thumbColor}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Switch
        trackColor={trackColor}
        thumbColor={thumbColor}
        onValueChange={setIsActive}
        value={isActive}
      />
    </SafeAreaView>
  );
};

export default CustomSwitchBtn;

const styles = StyleSheet.create({});