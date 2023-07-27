import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import ExploreButton from '../../common/buttons/ExploreButton';
import HeaderWithBackBtn from '../../common/buttons/HeaderWithBackBtn';

import {useNavigation} from '@react-navigation/native';

const SearchModal: React.FC<any> = ({setModalOpen}) => {
  const searchImg = require('../../../../assets/images/Search.png');
  const vector1mg = require('../../../../assets/images/Vector1.png');
  const [cityName, setCityName] = useState('');
  const [title, setTitle] = useState('Co-working Space');
  const Navigation = useNavigation();
  const handleSubmit = () => {
    
    Navigation.navigate('ListOfProperty' as never, {cityName, title}),
      setModalOpen(false);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.containerImg}
          onPress={() => setModalOpen(false)}>
          <Image style={styles.image} source={vector1mg} />
        </TouchableOpacity>

        <View>
          <TouchableOpacity style={styles.inputContainer}>
            <TextInput
              placeholder="Search City / Locality / Projects / Landmarks...."
              onChangeText={text => setCityName(text)}
            />
            <Image source={searchImg} />
          </TouchableOpacity>
        </View>
        <ExploreButton title="Continue" onPress={() => handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default SearchModal;

const styles = StyleSheet.create({
  containerImg: {
    borderWidth: 1,
    borderRadius: responsiveScreenWidth(7),
    backgroundColor: '#F5F4F8',
    borderColor: '#F5F4F8',
    width: responsiveScreenWidth(12),
    height: responsiveScreenWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 5,
    height: 10,
  },
  pb10: {paddingBottom: 10},
  modalOpen: {},
  modal: {
    borderWidth: 1,
    borderTopLeftRadius: 20,
    height: responsiveScreenHeight(80),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: responsiveScreenWidth(6),
    gap: responsiveScreenHeight(3),
  },

  commercial: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: '#8BC83F',
    padding: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#8BC83F',
    padding: responsiveScreenHeight(2),
    width: responsiveScreenWidth(90),
  },
});
