import {
    SafeAreaView,
    StyleProp,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
  } from 'react-native';
  import React, { FC } from 'react';
  import {
    responsiveFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
import { dark } from '../../../../assets/Styles/GlobalTheme';
  
  interface props {
      title: string;
      btnPressHandler(title: string): any,
      style: StyleProp<ViewStyle>;
  }
  
  const AgentBtn:FC <props> = ({title, btnPressHandler, style}) => {
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => btnPressHandler(title)} style={style}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  export default AgentBtn;
  
  const styles = StyleSheet.create({
    title: {
      color: dark,
      fontSize: responsiveFontSize(1.5)
    }
  });
  