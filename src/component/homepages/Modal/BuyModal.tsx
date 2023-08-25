import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import ExploreButton from '../../common/buttons/ExploreButton';
import {useNavigation} from '@react-navigation/native';
import {dark} from '../../../../assets/Styles/GlobalTheme';
import {TouchableRipple} from 'react-native-paper';

const BuyModal: React.FC<any> = ({setModalOpen}) => {
  const searchImg = require('../../../../assets/images/Search.png');
  const vector1mg = require('../../../../assets/images/Vector1.png');
  const [text, setText] = useState(false);
  const [buy, setBuy] = useState(true);
  const [rent, setRent] = useState(false);
  const [residential, setResidential] = useState(true);
  const [commercial, setCommercial] = useState(false);
  const [cityName, setCityName] = useState('');
  const [cityError, setCityError] = useState('');
  const Navigation = useNavigation();

  interface cityName {
    cityName: String;
  }

  const validation = () => {
    if (cityName.length < 4) {
      setCityError('Enter city name !');
      return false;
    } else {
      setCityError('');
      return true;
    }
  };

  const handleSubmit = () => {
    const isValid = validation();
    if (isValid) {
      //@ts-ignore
      Navigation.navigate('ListOfProperty' as never, {cityName}),
      setModalOpen(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => setModalOpen(false)}>
      <SafeAreaView style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.containerImg}
            onPress={() => setModalOpen(false)}>
            <Image style={styles.image} source={vector1mg} />
          </TouchableOpacity>

          <View>
            <Text style={styles.pb10}>Looking to </Text>
            <View style={styles.lookingTo}>
              <TouchableOpacity
                onPress={() => {
                  setBuy(true), setRent(false);
                }}
                style={buy ? styles.yesbuyrent : styles.notbuyrent}>
                <Text style={{color: dark}}>Buy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setBuy(false), setRent(true);
                }}
                style={rent ? styles.yesbuyrent : styles.notbuyrent}>
                <Text style={{color: dark}}>Rent/Lease</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.pb10}>Purpose of buying</Text>
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
                style={styles.textInput}
                placeholder="Enter City Name"
                onChangeText={text => setCityName(text)}
                placeholderTextColor={dark}
              />
              <Image source={searchImg} />
            </View>

            {cityError ? (
              <Text style={{color: 'red', textAlign: 'right'}}>
                {cityError}
              </Text>
            ) : null}
          </View>
          <ExploreButton title="Explore" onPress={() => handleSubmit()} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default BuyModal;

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
  pb10: {paddingBottom: 10, color: dark},
  inputCityName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: responsiveScreenWidth(2),
    borderRadius: responsiveScreenHeight(1)
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
  lookingTo: {
    flexDirection: 'row',
    gap: responsiveScreenWidth(2),
  },
  notbuyrent: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: 'white',
    padding: 8,
  },
  yesbuyrent: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: '#8BC83F',
    padding: 8,
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
  where: {
    fontSize: responsiveFontSize(2.5),
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#8BC83F',
    width: responsiveScreenWidth(87),
    paddingVertical: responsiveScreenHeight(1),
  },
  textInput: {
    color: dark,
    flex: 1,
    paddingVertical: responsiveScreenHeight(1.4),
  }
});
