import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
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
import {UpdateNewListing} from '../../../redux/reducers/postReducer';
import * as ImagePicker from 'react-native-image-picker';
import {ImageUploadService} from '../../../services/common/ImagePicker';
import {dark} from '../../../../assets/Styles/GlobalTheme';
import {width} from '../../../utils/constants/Matrics';

const PostPropertyThird = () => {
  const [imgUrls, setImgUrls] = useState<Array<string>>([]);

  const handleDeleteImage = (index: number) => {
    const newImgUrls = [...imgUrls];
    newImgUrls.splice(index, 1);
    setImgUrls(newImgUrls);
  };

  const handlePickerPress = async () => {
    await ImagePicker.launchImageLibrary({mediaType: 'photo'}, response => {
      const image = response.assets;
      if (image?.length) {
        const data = new FormData();
        data.append('file', {
          uri: image[0].uri,
          type: image[0].type,
          name: image[0].fileName,
        });
        // console.log('image Data', data);
        handleImageUpdload(data);
      }
    });
  };

  const handleImageUpdload = async (image: any) => {
    try {
      const res = await ImageUploadService(image);
      const {result} = res.data;

      const imageUrl = result.baseUrl + result.imagePath;

      setImgUrls([...imgUrls, imageUrl]);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const textRegex = /^[A-Za-z]+$/;
  const numberRegex = /^[1-9]\d*$/;

  const navigation = useNavigation();
  const [price, setPrice] = useState('');
  const [priceError, setPriceError] = useState('');
  const [text, setText] = useState('');
  const [textError, setTextError] = useState('');
  const {newListing} = useSelector((store: any) => store.post);
  const dispatch = useDispatch();

  const validate = () => {
    if (!newListing?.title) {
      setPriceError('');
      setTextError('Required!');
      return false;
    } else if (!textRegex.test(newListing?.title)) {
      setPriceError('');
      setTextError('Enter valid title!');
      return false;
    } else if (!newListing?.price) {
      setPriceError('Required!');
      setTextError('');
      return false;
    } else if (!numberRegex.test(newListing?.price)) {
      setPriceError('Enter valid number!');
      setTextError('');
      return false;
    } else {
      setPriceError('');
      setTextError('');
      return true;
    }
  };

  const handleNext = () => {
    dispatch(
      UpdateNewListing({
        key: 'images',
        value: imgUrls,
      }),
    );
    const isValid = validate();
    if (isValid) {
      navigation.navigate('PropertyFeatures' as never);
    }
  };

  const setPriceHandel = (params: any) => {
    if (!params) {
      setPriceError('Required!');
    } else if (!numberRegex.test(params)) {
      setPriceError('Enter valid price!');
    } else {
      setPriceError('');
    }
    setPrice(params);
    dispatch(
      UpdateNewListing({
        key: 'price',
        value: params,
      }),
    );
  };

  const setTitleHandel = (params: string) => {
    if (!params) {
      setTextError('Required!');
    } else if (!textRegex.test(params)) {
      setTextError('Enter valid title');
    } else {
      setTextError('');
    }
    setText(params);
    dispatch(
      UpdateNewListing({
        key: 'title',
        value: params,
      }),
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableNativeFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.view}>
          <View style={styles.container}>
            <View style={styles.btnBack}>
              <HeaderWithBackBtn />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{flex: 1}}>
                <View style={styles.headerText}>
                  <Text style={styles.steps}>Step 3 of 4</Text>
                  <Text style={styles.basicDetailsText}>Photos & Pricing</Text>
                </View>
                <Text style={styles.textPropertyPhoto}>
                  Add property photos
                </Text>
                <TouchableOpacity
                  onPress={handlePickerPress}
                  style={styles.uploadPhoto}>
                  <Ionicons
                    name="image"
                    size={responsiveWidth(18)}
                    color={'#F5F4F8'}
                  />
                  <Text style={styles.addPhotoText}>+ Add Photos</Text>
                </TouchableOpacity>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View
                    style={[
                      styles.imageSelected,
                      imgUrls ? styles.padding : null,
                    ]}>
                    {imgUrls?.map((option: string, index: number) => (
                      <View key={index} style={{position: 'relative'}}>
                        <Image
                          style={styles.images}
                          source={{uri: option}}
                          alt="img"
                        />
                        <Ionicons
                          onPress={() => handleDeleteImage(index)}
                          style={{position: 'absolute', top: -7, right: -7}}
                          size={responsiveScreenWidth(5)}
                          color="gray"
                          name="close-circle-sharp"
                        />
                      </View>
                    ))}
                  </View>
                </ScrollView>

                <View style={styles.inputContainer1}>
                  <View style={styles.mainText}>
                    <Text style={{color: dark}}>Title </Text>
                    <Text
                      style={{fontSize: responsiveFontSize(2.5), color: 'red'}}>
                      *
                    </Text>
                  </View>

                  <CustomTextInput
                    onChangeText={setTitleHandel}
                    value={newListing?.title}
                    placeholder="Title"
                    errorText={textError}
                  />
                  {textError ? (
                    <Text style={{color: 'red', alignSelf: 'flex-end'}}>
                      {textError}
                    </Text>
                  ) : null}
                </View>
                <View style={styles.inputContainer}>
                  <View style={styles.mainText}>
                    <Text style={{color: dark}}>Pricing Details </Text>
                    <Text
                      style={{fontSize: responsiveFontSize(2.5), color: 'red'}}>
                      *
                    </Text>
                  </View>

                  <CustomTextInput
                    onChangeText={setPriceHandel}
                    value={newListing?.price}
                    placeholder="Enter expected price"
                    errorText={priceError}
                  />
                  {priceError ? (
                    <Text style={styles.errorText}>{priceError}</Text>
                  ) : null}
                </View>
              </View>
              <View
                style={
                  !imgUrls
                    ? {paddingTop: responsiveScreenHeight(7)}
                    : {paddingTop: responsiveScreenHeight(0)}
                }>
                <ExploreButton onPress={() => handleNext()} title="Next" />
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
};

export default PostPropertyThird;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveScreenWidth(3),
  },
  view: {
    flex: 1,
  },
  btnBack: {
    marginVertical: responsiveScreenHeight(1),
  },
  headerText: {
    gap: responsiveHeight(2),
  },
  steps: {
    color: dark,
    fontSize: responsiveScreenFontSize(1.9),
    fontWeight: '400',
  },
  basicDetailsText: {
    color: dark,
    fontSize: responsiveFontSize(3.8),
    fontWeight: 'bold',
  },
  textPropertyPhoto: {
    color: dark,
    marginTop: responsiveHeight(3.7),
    marginBottom: responsiveHeight(1),
  },
  uploadPhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginVertical: responsiveScreenHeight(1),
    borderRadius: responsiveWidth(4),
    backgroundColor: '#DFDFDF',
    width: '99%',
    height: '25%',
  },
  addPhotoText: {
    fontSize: responsiveFontSize(3),
    color: '#8BC83F',
  },

  imageSelected: {
    flexDirection: 'row',
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(1),
    gap: responsiveScreenWidth(3),
  },
  padding: {
    height: responsiveScreenHeight(16),
  },

  images: {
    width: responsiveScreenWidth(16),
    height: responsiveScreenHeight(8),
    borderRadius: responsiveWidth(5),
  },
  inputContainer: {
    marginBottom: responsiveScreenHeight(3),
  },
  errorText: {
    textAlign: 'right',
    color: 'red',
  },
  inputContainer1: {
    marginBottom: responsiveScreenHeight(1),
  },
  mainText: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: responsiveScreenHeight(2),
  },
  bottomBtn: {
    paddingVertical: responsiveScreenHeight(8),
  },
});
