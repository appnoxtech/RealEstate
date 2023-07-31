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


const UserType = () => {
  const [userType, setUserType] = useState<string>('');
  const imageAgentUrl = require('../../../assets/Animation/animationUser.json')
  const imageUserUrl = require('../../../assets/Animation/animationAgent.json');
  const imageOwnerUrl = require('../../../assets/Animation/animationOwner.json');

  const SelectUserType = [
    {type: 'Agent', img: imageAgentUrl},
    {type: 'User', img: imageUserUrl},
    {type: 'Owner', img: imageOwnerUrl},
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.headerBtn}>
        <HeaderWithBackBtn />
      </View>
      <View style={styles.container}>
        <Text style={styles.textUserType}>Select User Type</Text>
        {SelectUserType.map(option => {
          return (
            <UserTypeBtn
              key={option.type}
              label={option.type}
              btnPressHandler={setUserType}
              style={
                userType === option.type
                  ? styles.selectedUser
                  : styles.unSelectedUser
              }
              imageUrl={option.img}
            />
          );
        })}
         <NextBtn />
      </View>
    </SafeAreaView>
  );
};

export default UserType;

const styles = StyleSheet.create({
  headerBtn: {
    paddingHorizontal: responsiveScreenWidth(5),
  },
  selectedUser: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3fc888',
    paddingVertical: responsiveScreenHeight(2),
    borderRadius: responsiveScreenHeight(4),
    paddingHorizontal: responsiveScreenWidth(3)
  },
  unSelectedUser: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F4F8', 
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenHeight(2),
    borderRadius: responsiveScreenHeight(4),
    marginBottom: responsiveScreenHeight(1)
    
  },
  textUserType: {
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
    paddingHorizontal: responsiveScreenWidth(4)
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
