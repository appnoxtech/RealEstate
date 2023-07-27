import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ExploreButton from '../../../component/common/buttons/ExploreButton';
import {useNavigation} from '@react-navigation/native';
import HeaderWithBackBtn from '../../../component/common/buttons/HeaderWithBackBtn';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomTextInput from '../../../component/common/inputs/inputComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import { UpdateNewListing } from '../../../redux/reducers/postReducer';



const PostPropertyThird = () => {



  const REGEX_NUMBER = /^\d*$/;
  const navigation = useNavigation();
  const [price, setPrice] = useState('');
  const [priceError, setPriceError] = useState('')
  const [text, setText] = useState('');
  const [textError, setTextError] = useState('');
  const {newListing} = useSelector((store: any) => store.post);
  const dispatch = useDispatch();
  
  const validate = () => {
    if(!text.length) {
      setPriceError('Required!');
      return false;
    } else if (!REGEX_NUMBER.test(price)) {
      setPriceError('Enter valid number!');
      return false;
    } else {
      setPriceError('');
      return true;
    }
  }
 
  const handleNext = () => {
    const isValid = validate()
    if(isValid) {
      navigation.navigate('PropertyFeatures' as never)
    }
  };


  const setPriceHandel = (params: any) => {
    setPrice(params);
    dispatch(UpdateNewListing({
      key: 'price', value: params
    }))
  }

  const setTitleHandel = (params: string) => {
    setText(params);
    dispatch(UpdateNewListing({
      key: "title", 
      value: params
    }))
  }

 

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.btnBack}>
          <HeaderWithBackBtn />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.headerText}>
            <Text style={styles.steps}>Step 3 of 3</Text>
            <Text style={styles.basicDetailsText}>Photos & Pricing</Text>
          </View>
          <Text style={styles.textPropertyPhoto}>Add property photos</Text>
          <TouchableOpacity style={styles.uploadPhoto}>
            <Ionicons
              name="image"
              size={responsiveWidth(18)}
              color={'#F5F4F8'}
            />
            <Text style={styles.addPhotoText}>+ Add Photos</Text>
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <Text>Pricing Details</Text>
            <CustomTextInput
              onChangeText={setPriceHandel}
              value={price}
              placeholder="Enter expected price"
            />
            {priceError ? <Text style={{color: 'red'}}>{priceError}</Text> : null}
          </View>
          <View style={styles.inputContainer1}>
            <Text>Title</Text>
            <CustomTextInput
              onChangeText={setTitleHandel}
              value={text}
              placeholder="title"
            />
            
          </View>
          
        </View>
        <View style={styles.bottomBtn}>
          <ExploreButton onPress={() => handleNext()} title="Next" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PostPropertyThird;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveScreenWidth(3),
  },
  btnBack: {
    marginVertical: responsiveScreenHeight(1),
    paddingBottom: responsiveScreenHeight(6),
  },
  headerText: {
    gap: responsiveHeight(2),
  },
  steps: {
    fontSize: responsiveScreenFontSize(1.9),
    fontWeight: '400',
  },
  basicDetailsText: {
    fontSize: responsiveFontSize(3.8),
    fontWeight: 'bold',
  },
  textPropertyPhoto: {
    marginTop: responsiveHeight(3.7),
    marginBottom: responsiveHeight(1),
  },
  uploadPhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginVertical: responsiveScreenHeight(4),
    borderRadius: responsiveWidth(4),
    backgroundColor: '#DFDFDF',
    width: responsiveWidth(93),
    height: responsiveScreenHeight(30),
  },
  addPhotoText: {
    fontSize: responsiveFontSize(3),
    color: '#8BC83F',
  },
  inputContainer: {

  },
  inputContainer1: {
    marginBottom: responsiveScreenHeight(3),
  },
  bottomBtn: {
    paddingVertical: responsiveScreenHeight(2),
  },
});
