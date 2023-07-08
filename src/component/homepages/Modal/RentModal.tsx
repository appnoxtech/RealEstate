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
    responsiveFontSize,
    responsiveScreenHeight,
    responsiveScreenWidth,
  } from 'react-native-responsive-dimensions';
  import ExploreButton from '../../common/buttons/ExploreButton';
  const searchImg = require('../../../../assets/images/Search.png');
  const vector1mg = require('../../../../assets/images/Vector1.png');
  import {useNavigation} from '@react-navigation/native';
  import SearchModal from './SearchModal';
  
  const RentModal: React.FC<any> = ({setModalOpen}) => {
    const [text, setText] = useState(false);
    const [title, setTitle] = useState('Rent');
    const [purposeOfBuying, setPurposeOfBuying] = useState('Residential use');
    const [cityName, setCityName] = useState('');
    const [cityError, setCityError] = useState(false);
    const Navigation = useNavigation();
  
    if (title === 'Rent') {
      styles.rent.borderColor = '#8BC83F';
      styles.buy.borderColor = 'white';
    } else {
      styles.buy.borderColor = '#8BC83F';
      styles.rent.borderColor = 'white';
    }
  
    if (purposeOfBuying === 'Residential use') {
      styles.residential.borderColor = '#8BC83F';
      styles.commercial.borderColor = 'white';
    } else {
      styles.commercial.borderColor = '#8BC83F';
      styles.residential.borderColor = 'white';
    }
  
    interface cityName {
      cityName: String;
    }
  
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
        Navigation.navigate('ListOfProperty' as never, {cityName, title}),
          setModalOpen(false);
      }
    };
    return (
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
                onPress={() => setTitle('Buy')}
                style={styles.buy}>
                <Text>Buy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTitle('Rent/Lease')}
                style={styles.rent}>
                <Text>Rent/Lease</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.pb10}>Purpose of buying</Text>
            <View style={styles.purposeOfBuying}>
              <TouchableOpacity
                onPress={() => setPurposeOfBuying('Residential use')}
                style={styles.residential}>
                <Text>Residential use</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setPurposeOfBuying('Commercial use')}
                style={styles.commercial}>
                <Text>Commercial use</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.pb10}>City name</Text>
            <TouchableOpacity
              onPress={() => setText(true)}
              style={styles.inputContainer}>
              {!text ? (
                <Text style={styles.where}>Where?</Text>
              ) : (
                <TextInput
                  placeholder="Enter City Name"
                  onChangeText={text => setCityName(text)}
                />
              )}
  
              <Image source={searchImg} />
            </TouchableOpacity>
            {cityError ?( <Text style={{color: 'red', textAlign: 'right'}}>{cityError}</Text>): null}
          </View>
          <ExploreButton title="Explore" onPress={() => handleSubmit()} />
        </View>
      </SafeAreaView>
    );
  };
  
  export default RentModal;
  
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
    buy: {
      borderWidth: 1,
      borderRadius: 18,
      borderColor: 'white',
      padding: 8,
    },
    rent: {
      borderWidth: 1,
      borderRadius: 18,
      borderColor: 'white',
      padding: 8,
    },
    purposeOfBuying: {
      flexDirection: 'row',
      gap: responsiveScreenWidth(2),
    },
    residential: {
      borderWidth: 1,
      borderRadius: 18,
      borderColor: 'white',
      padding: 8,
    },
    commercial: {
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
  });
  