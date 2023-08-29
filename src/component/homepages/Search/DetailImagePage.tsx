import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import HeaderWithBackBtn from '../../common/buttons/HeaderWithBackBtn';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import BtnLeft from '../../common/buttons/BtnLeft';
import BtnRight from '../../common/buttons/BtnRight';

interface props {
  data: Array<string>;
}

const DetailImagePage: FC<props> = ({route}: any) => {

  const image = 'https://harsha-temp.s3.ap-south-1.amazonaws.com/appnox/Real-Estate-Documents/image_1693214102370.png'
  
  const {data} = route.params;
  const [activeIndex, setActiveIndex] = useState(0);


  const BtnLeftHandler = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const BtnRightHandler = () => {
    if (activeIndex < data.length) {
      setActiveIndex(activeIndex + 1);
    }
  };

  console.log();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderWithBackBtn style={styles.headerButton} />
      <ImageBackground
        style={styles.bgImage}
        source={{uri: data.length ? data[activeIndex] : image}}>
        <View>
          {activeIndex <= 0 ? null : (
            <BtnLeft BtnLeftHandler={BtnLeftHandler} />
          )}
        </View>
        <View>
          {activeIndex >= data.length - 1 ? null : (
            <BtnRight BtnRightHandler={BtnRightHandler} />
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default DetailImagePage;

const styles = StyleSheet.create({
  headerButton: {
    position: 'absolute',
    marginHorizontal: responsiveScreenWidth(5),
    marginVertical: responsiveScreenHeight(1),
    top:
      Platform.OS === 'ios'
        ? responsiveScreenHeight(7.2)
        : responsiveScreenHeight(1.2),
    zIndex: 100,
  },
  bgImage: {
    height: '100%',
    borderRadius: responsiveWidth(10),
    overflow: 'hidden',
    marginHorizontal: responsiveScreenWidth(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
