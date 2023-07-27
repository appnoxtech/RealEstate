import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveScreenHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import ExploreButton from '../../component/common/buttons/ExploreButton';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import { useDispatch } from 'react-redux';
import { UpdateIsLoginState } from '../../redux/reducers/userReducer';

const SuccessPage = ({route} : any) => {
  const { title } = route.params;
  console.log(title)
    const dispatch = useDispatch();
    const logo = require('../../../assets/images/Maskgroup.png');
    const animationSuccess = require('../../../assets/Animation/Animation_1689673992744.json');
    const navigation = useNavigation();
    const handlePress = () => {
        dispatch(UpdateIsLoginState(true));
    }
  return (
   <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
     <View style={styles.container}>
      <Image style={styles.imageLogo} source={logo} />
      <Text style={styles.text}>
        You have successfully {title}
      </Text>
      <Lottie style={styles.lottieAnimation} source={animationSuccess} autoPlay loop />
      <Text style={styles.text}>Success</Text>
      <ExploreButton onPress={handlePress} title='Continue' />
    </View>
   </SafeAreaView>
  )
}

export default SuccessPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imageLogo: {
        width: responsiveWidth(20),
        height: responsiveScreenHeight(10)
    },
    text: {
        fontSize: responsiveFontSize(3),
        marginBottom: responsiveScreenHeight(5)
    },
    lottieAnimation: {
        width: responsiveWidth(50),
      }
})