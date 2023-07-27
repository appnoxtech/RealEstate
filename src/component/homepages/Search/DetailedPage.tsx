import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import React from 'react';
import HeaderWithBackBtn from '../../common/buttons/HeaderWithBackBtn';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const DetailedPage = ({route}: any) => {
  const {data} = route.params;
  console.log(data);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.backButton}>
          <HeaderWithBackBtn />
        </View>
        <Text style={styles.location}>{data.location}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailedPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveScreenWidth(3),
    gap: responsiveHeight(3),
  },
  backButton: {},
  location: {
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(4)
  },
});
