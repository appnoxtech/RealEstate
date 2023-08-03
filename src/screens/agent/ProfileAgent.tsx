import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateLogout} from '../../redux/reducers/userReducer';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {useNavigation} from '@react-navigation/native';


export default function ProfileAgent() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(UpdateLogout());
  };

  const {userDetails} = useSelector((state: any) => state.user);
  console.log(userDetails);
  
  const navigation = useNavigation();

  const [property, setProperty] = useState('Listings');

  const handelPress = (params: string) => {
    setProperty(params);
  };

  const data = [
    {
      number: 20,
      title: 'Listings',
      page: 'PropertyListings',
    },
    {
      number: 5,
      title: 'Reviews',
      page: 'Reviews',
    },
    {
      number: 10,
      title: 'Responses',
      page: 'Responses',
    },
  ];

  const agentData = ['Listings', 'Sold', 'Responses'];
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Text style={styles.profileText}>Profile</Text>
        <View style={styles.profileContainer}>
          <View style={styles.userIcon}>
            <Fontisto name="person" size={responsiveWidth(10)} />
          </View>

          <Text style={styles.userName}>
            <Text style={styles.subText}> {userDetails?.name} </Text>
          </Text>
          <Text style={styles.emailText}>{userDetails?.email}</Text>
          </View>
        <View style={styles.button__}>
          <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text style={styles.btnText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    gap: responsiveHeight(1),
  },
  header: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4F8',
    paddingHorizontal: responsiveScreenWidth(6),
    paddingVertical: responsiveScreenHeight(2.5),
    marginBottom: responsiveHeight(4),
    gap: responsiveScreenWidth(3),
  },
  headerText: {
    fontSize: responsiveFontSize(3),
    color: 'gray',
    fontWeight: 'bold',
  },
  profileText: {
    textAlign: 'center',
    fontSize: responsiveFontSize(3),
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: responsiveScreenHeight(2),
    gap: responsiveScreenHeight(1),
  },
  userIcon: {
    borderWidth: responsiveScreenWidth(0.2),
    borderColor: '#234F68',
    borderRadius: responsiveScreenWidth(50),
    paddingHorizontal: responsiveScreenWidth(5.6),
    paddingVertical: responsiveScreenHeight(2),
  },
  textAuth: {
    color: '#234F68',
    fontSize: responsiveFontSize(3),
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#8BC83F',
    paddingVertical: responsiveScreenHeight(2),
    width: responsiveScreenWidth(70),
    backgroundColor: '#8BC83F',
  },
  emailText: {
    fontSize: responsiveFontSize(3),
  },

  box: {
    flexDirection: 'row',
    gap: responsiveScreenWidth(2),
    marginBottom: responsiveScreenHeight(1),
  },

  responseBox: {
    alignItems: 'center',
    borderRadius: responsiveWidth(10),
    paddingHorizontal: responsiveScreenWidth(6.5),
    paddingVertical: responsiveScreenHeight(1),
  },
  responseBoxBgColor: {
    backgroundColor: 'white',
  },

  button__: {
    alignItems: 'center',
    marginVertical: responsiveScreenHeight(5),
  },

  listingsBox: {
    minWidth: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F4F8',
    borderRadius: responsiveWidth(10),
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(1.5),
    gap: responsiveScreenWidth(6),
  },

  btnText: {
    color: 'white',
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
  },
  userName: {
    fontSize: responsiveFontSize(4),
  },
  subText: {
    color: '#234F68',
  },
});
