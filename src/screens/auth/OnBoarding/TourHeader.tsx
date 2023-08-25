import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, { useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import { Appearance } from 'react-native';
import { storeData } from '../../../hooks/CommonHooks/storageHelper';
import { useDispatch } from 'react-redux';
import { UpdateAppLaunchedState } from '../../../redux/reducers/commonReducer';

export default function TourHeader() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const maskgroupImageUri =  '../../../../assets/images/Maskgroup.png';
  const onSkipPressHandler = async() => {
    try {
      dispatch(UpdateAppLaunchedState(true));
    } catch (error) {
      console.log('Error', error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.tourHeaderImage}
        source={require(maskgroupImageUri)}
      />

      <TouchableOpacity
        onPress={onSkipPressHandler}
        style={styles.button}>
        <Text style={{fontSize: 12, color: '#000000'}}>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#DFDFDF',
    width: 83,
    height: 36,
    backgroundColor: '#DFDFDF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tourHeaderImage: {
    width: 79,
    height: 74,
  },
});
