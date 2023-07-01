import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import maskgroup from '../../../../assets/images/Maskgroup.png';
const maskgroupImageUri = Image.resolveAssetSource(maskgroup).uri;

export default function TourHeader() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.tourHeaderImage}
        source={{uri: maskgroupImageUri}}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Login' as never)}
        style={styles.button}>
        <Text style={{fontSize: 12}}>Skip</Text>
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
