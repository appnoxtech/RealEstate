import React, {FC, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {responsiveScreenHeight, responsiveScreenWidth, responsiveWidth} from 'react-native-responsive-dimensions';
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
  // const [phoneNumber, setPhoneNumber] = useState(profileData.phoneNumber);
  const isKeyboardVisible = useKeyboardVisibleListener();
  

  const handleSave = () => {
    onSave({name, email});
    onClose();
  };
  // console.log(profileData);

  return (
    <Modal
      isVisible={isVisible}
      onRequestClose={onClose}
      backdropOpacity={0.5}
      onBackdropPress={() => onClose()}>
      <View
        style={{
          height: '28%',
          backgroundColor: 'white',
          padding: 20,
          borderRadius: responsiveWidth(5),
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
          Update Profile
        </Text>
        <TextInput
          style={{
            marginBottom: 10,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: responsiveWidth(5),
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
          }}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TouchableOpacity
          onPress={handleSave}
          style={{
            backgroundColor: '#8BC83F',
            paddingHorizontal: responsiveScreenWidth(10),
            paddingVertical: responsiveScreenHeight(2),
            borderRadius: 5,
            alignSelf: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default UpdateProfileModal;
