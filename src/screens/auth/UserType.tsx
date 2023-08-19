import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import HeaderWithBackBtn from '../../component/common/buttons/HeaderWithBackBtn';
import UserTypeBtn from '../../component/common/buttons/UserTypeBtn';
import NextBtn from '../../component/common/buttons/NextBtn';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateRegisterUserDetails} from '../../redux/reducers/userReducer';
import {useNavigation} from '@react-navigation/native';
import useAuthServiceHandler from '../../hooks/serviceHandler/AuthServiceHandler';
import { dark } from '../../../assets/Styles/GlobalTheme';


const UserType = () => {
  const dispatch = useDispatch();
  const imageAgentUrl = require('../../../assets/Animation/animationUser.json');
  const imageUserUrl = require('../../../assets/Animation/animationAgent.json');
  const imageOwnerUrl = require('../../../assets/Animation/animationOwner.json');
  const {registerUserDetails} = useSelector((state: any) => state.user);
  const {handleRegisterService} = useAuthServiceHandler();

  const SelectUserType = [
    {type: 'Agent', img: imageAgentUrl, id: 'agent'},
    {type: 'User', img: imageUserUrl, id: 'tenant'},
    {type: 'Owner', img: imageOwnerUrl, id: 'owner'},
  ];

  const setUserType = (userType: string) => {
    dispatch(
      UpdateRegisterUserDetails({...registerUserDetails, role: userType}),
    );
   
  };
  const handelPress = () => {
    handleRegisterService(registerUserDetails);
  }
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.headerBtn}>
        <HeaderWithBackBtn />
        <Text style={styles.textUserType}>Select User Type</Text>
      </View>
      <View style={styles.container}>
        
        {SelectUserType.map(option => {
          return (
            <UserTypeBtn
              key={option.id}
              label={option.type}
              id={option.id}
              btnPressHandler={() => {setUserType; handelPress();}}
              style={
                registerUserDetails?.role === option?.id
                  ? styles.selectedUser
                  : styles.unSelectedUser
              }
              imageUrl={option.img}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default UserType;

const styles = StyleSheet.create({
  headerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(2.5),
    gap: responsiveScreenWidth(5)
  },
  selectedUser: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3fc888',
    paddingVertical: responsiveScreenHeight(4.5),
    borderRadius: responsiveScreenHeight(4),
    paddingHorizontal: responsiveScreenWidth(3),
  },
  unSelectedUser: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F4F8',
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenHeight(4.5),
    borderRadius: responsiveScreenHeight(4),
    marginBottom: responsiveScreenHeight(1),
  },
  textUserType: {
    color: dark,
    fontSize: responsiveFontSize(4),
  },
  agentImage: {
    width: responsiveWidth(40),
    height: responsiveHeight(18.5),
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: responsiveHeight(1),
    paddingHorizontal: responsiveScreenWidth(4),
  },
  btn: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8BC83F',
    borderRadius: 5,
    backgroundColor: '#8BC83F',
    paddingHorizontal: responsiveScreenHeight(8),
    paddingVertical: responsiveScreenHeight(1.7),
  },
  selectUserType: {
    textAlign: 'center',
    fontSize: responsiveFontSize(4),
  },
});

