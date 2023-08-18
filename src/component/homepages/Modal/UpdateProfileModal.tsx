import React, {FC, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';
import {responsiveScreenHeight, responsiveScreenWidth, responsiveWidth} from 'react-native-responsive-dimensions';
import { dark } from '../../../../assets/Styles/GlobalTheme';
import useKeyboardVisibleListener from '../../../hooks/CommonHooks/isKeyboardVisibleHook';

interface props {
  isVisible: any;
  onClose: any;
  onSave: any;
  profileData: any;
}
const UpdateProfileModal: FC<props> = ({
  isVisible,
  onClose,
  onSave,
  profileData,
}) => {
  const [name, setName] = useState(profileData.name);
  const [email, setEmail] = useState(profileData.email);
  

  const handleSave = () => {
    onSave({name, email});
    onClose();
  };
  // console.log(profileData);

  return (
    <SafeAreaView>
      <Modal
      isVisible={isVisible}
      onRequestClose={onClose}
      backdropOpacity={0.5}
      onBackdropPress={() => onClose()}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 20,
          paddingVertical: responsiveScreenHeight(5),
          marginTop: responsiveScreenHeight(5),
          marginBottom: responsiveScreenHeight(50),
          gap: responsiveScreenHeight(2),
          borderRadius: responsiveWidth(5),
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: dark}}>
          Update Profile
        </Text>
        <TextInput
          style={{
            marginBottom: 10,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: responsiveWidth(5),
            color: dark
          }}
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={{
            marginBottom: 10,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: responsiveWidth(5),
            color: dark
          }}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TouchableOpacity
          onPress={handleSave}
          style={{
            backgroundColor: '#8BC83F',
            width: '100%',
            paddingHorizontal: responsiveScreenWidth(10),
            paddingVertical: responsiveScreenHeight(2),
            borderRadius: 5,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>
    </SafeAreaView>
  );
};

export default UpdateProfileModal;
