import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
} from 'react-native';
import {useState} from 'react';
import React from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const CustomModal: React.FC<any> = ({title, modalOpen, setTitle, children}) => {

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Modal
        style={styles.modal}
        visible={modalOpen}
        animationType="slide"
        transparent={true}>
        {children}
      </Modal>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalOpen: {},
  modal: {
    flex: 1,
    backgroundColor: 'red',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    height: responsiveScreenHeight(80),
  },
 
});
