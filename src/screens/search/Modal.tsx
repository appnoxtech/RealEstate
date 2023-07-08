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
import { useState } from 'react';
import React from 'react';
import { responsiveScreenHeight,responsiveScreenWidth  } from 'react-native-responsive-dimensions';

const searchImg = require('../../../assets/images/Search.png');



const CustomModal:React.FC<any> = ({ title, modalOpen, setTitle, children }) => {
    // const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
     <Modal style={styles.modal} visible={modalOpen} animationType="slide" transparent={true}>
        {children}
      </Modal>
   
    </View>
  );
}

export default CustomModal

const styles = StyleSheet.create({
    modalOpen: {},
  modal: {
    flex:1,
    backgroundColor: 'red',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    height: responsiveScreenHeight(80),
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: responsiveScreenWidth(6),
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
    borderColor: '#8BC83F',
    padding: 8,
  },
  commercial: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: '#8BC83F',
    padding: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#8BC83F',
    width: responsiveScreenWidth(90),
  },
});
