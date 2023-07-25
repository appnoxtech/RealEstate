import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function TourHeader() {
  const navigation = useNavigation();
  const maskgroupImageUri =  '../../../../assets/images/Maskgroup.png'
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.tourHeaderImage}
        source={require(maskgroupImageUri)}
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
