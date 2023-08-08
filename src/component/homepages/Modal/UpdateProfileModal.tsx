import React, {FC, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

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
  const [phoneNumber, setPhoneNumber] = useState(profileData.phoneNumber);

  const handleSave = () => {
    onSave({name, email, phoneNumber});
    onClose();
  };
  // console.log(profileData);
  

  return (
    <Modal
      isVisible={isVisible}
      onRequestClose={onClose}
      backdropOpacity={0.5}
     >
      <View style={{height: "40%",backgroundColor: 'white', padding: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
          Update Profile
        </Text>
        <TextInput
          style={{
            marginBottom: 10,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
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
          }}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
         <TextInput
          style={{
            marginBottom: 10,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          placeholder="Contact Details"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
        <TouchableOpacity
          onPress={handleSave}
          style={{
            backgroundColor: '#8BC83F',
            padding: 10,
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
