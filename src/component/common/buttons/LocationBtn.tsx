import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {
  responsiveFontSize,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { dark } from '../../../../assets/Styles/GlobalTheme';



interface props {
  label: string;
}
const LocationBtn: FC<props> = ({label}) => {

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.showCityName}>
        <Text style={{color: dark}}>{label}</Text>
      </View>
    </SafeAreaView>
  );
};

export default LocationBtn;

const styles = StyleSheet.create({
  showCityName: {
    borderWidth: responsiveWidth(0.3),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveWidth(18),
    borderColor: '#8BC83F',
    paddingHorizontal: responsiveScreenWidth(5),
    marginHorizontal: responsiveScreenWidth(1),
    padding: 5,
  },
  removeFont: {
    fontSize: responsiveFontSize(2.5),
  },
});

function UpdateNewListing(arg0: string): any {
  throw new Error('Function not implemented.');
}
