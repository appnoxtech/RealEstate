import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import ExploreButton from '../../common/buttons/ExploreButton';

import {useNavigation} from '@react-navigation/native';
import { dark } from '../../../../assets/Styles/GlobalTheme';

const BuyPlotLand: React.FC<any> = ({setModalOpen}) => {
  const searchImg = require('../../../../assets/images/Search.png');
  const vectorImg = require('../../../../assets/images/Vector1.png');
  const [text, setText] = useState(false);
  const [residential, setResidential] = useState(true);
  const [commercial, setCommercial] = useState(false);
  const [cityName, setCityName] = useState('');
  const [cityError, setCityError] = useState('');
  const Navigation = useNavigation();

  const validation = () => {
    if (cityName.length < 4) {
      setCityError('Enter valid city name !');
      return false;
    } else {
      setCityError('');
      return true;
    }
  };

  const handleSubmit = () => {
    const isValid = validation();
    if (isValid) {
      Navigation.navigate('ListOfProperty' as never, {cityName});
      setModalOpen(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'flex-end'}}>
      <View style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.containerImg}
          onPress={() => setModalOpen(false)}>
          <Image style={styles.image} source={vectorImg} />
        </TouchableOpacity>

        <View>
          <Text style={styles.pb10}>Type of Plot/Land</Text>
          <View style={styles.purposeOfBuying}>
            <TouchableOpacity
             onPress={() => {
              setResidential(true), setCommercial(false);
            }}
            style={
              residential
                ? styles.yesresidentialcommercial
                : styles.noresidentialcommercial
            }>
              <Text style={{color: dark}}>Residential use</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setResidential(false), setCommercial(true);
              }}
              style={
                commercial
                  ? styles.yesresidentialcommercial
                  : styles.noresidentialcommercial
              }>
              <Text style={{color: dark}}>Commercial use</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.pb10}>City name</Text>

          <View style={styles.inputCityName}>
            <TextInput
            style={{flex: 1,color: dark}}
              placeholder="Enter City Name"
              onChangeText={text => setCityName(text)}
              placeholderTextColor={dark}
            />

            <Image source={searchImg} />
          </View>

          {cityError ? (
            <Text style={{color: 'red', textAlign: 'right'}}>{cityError}</Text>
          ) : null}
        </View>
        <ExploreButton title="Explore" onPress={() => handleSubmit()} />
      </View>
    </SafeAreaView>
  );
};

export default BuyPlotLand;

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
  inputCityName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: 5,
    height: 10,
  },
  pb10: {paddingBottom: 10,
    color: dark
  },
  modalOpen: {},
  modal: {
    borderWidth: 1,
    borderTopLeftRadius: 20,
    height: responsiveScreenHeight(80),
  },
  modalContainer: {
    maxHeight: responsiveScreenHeight(80),
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderBottomWidth: 0,
    borderWidth: 1,
    borderColor: '#8BC83F',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: responsiveScreenWidth(6),
    paddingVertical: responsiveScreenHeight(2),
    gap: responsiveScreenHeight(3),
  },
  purposeOfBuying: {
    flexDirection: 'row',
    gap: responsiveScreenWidth(2),
  },
  yesresidentialcommercial: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: '#8BC83F',
    padding: 8,
  },
  noresidentialcommercial: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: 'white',
    padding: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#8BC83F',
    width: responsiveScreenWidth(90),
    paddingVertical: responsiveScreenHeight(1),
  },
  where: {
    fontSize: responsiveFontSize(2.5),
  },
});
