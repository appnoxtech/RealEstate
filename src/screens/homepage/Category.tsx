import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import CustomModal from '../search/Modal';
import BuyModal from '../../component/homepages/Modal/BuyModal';
import RentModal from '../../component/homepages/Modal/RentModal';
import BuyPlotLand from '../../component/homepages/Modal/BuyPlotLand';
import CoWorkSpace from '../../component/homepages/Modal/CoWorkSpace'
import LeaseCommercial from '../../component/homepages/Modal/LeaseCommercial'
import BuyCommercial from '../../component/homepages/Modal/BuyCommercial'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Buy',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Rent',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Plot / Land',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    title: 'Co-working Space',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: 'Buy Commercial',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6c',
    title: 'Lease Commercial',
  },
];

type ItemProps = {
  title: string;
  setShowModal(option: boolean): any;
  selectedOption: string;
  setSelectedOption(option: string): any;
};

const Item = ({
  title,
  setShowModal,
  selectedOption,
  setSelectedOption,
}: ItemProps) => {
  const handleOptionPress = () => {
    setSelectedOption(title);
    setShowModal(true);
  };
  return (
    <TouchableOpacity onPress={handleOptionPress}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Category = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => (
          <Item
            setShowModal={setShowModal}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            title={item.title}
          />
        )}
        keyExtractor={item => item.id}
      />
      <CustomModal title={selectedOption} modalOpen={showModal}>
        {selectedOption === 'Buy' ? (
          <BuyModal setModalOpen={setShowModal} />
        ) : null}
        {selectedOption === 'Rent' ? (
          <RentModal setModalOpen={setShowModal} />
        ) : null}
        {selectedOption === 'Plot / Land' ? (
          <BuyPlotLand setModalOpen={setShowModal} />
        ) : null}
        {selectedOption === 'Co-working Space' ? (
          <CoWorkSpace setModalOpen={setShowModal} />
        ) : null}
        {selectedOption === 'Lease Commercial' ? (
          <LeaseCommercial setModalOpen={setShowModal} />
        ) : null}
        {selectedOption === 'Buy Commercial' ? (
          <BuyCommercial setModalOpen={setShowModal} />
        ) : null}
      </CustomModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#F5F4F8',
    paddingHorizontal: responsiveScreenWidth(4),
    paddingVertical: responsiveScreenHeight(1),
    borderWidth: 0,
    borderRadius: 30,
    marginHorizontal: 5,
  },
  title: {
    color: '#234F68',
    fontSize: responsiveFontSize(1.7),
    padding: responsiveScreenWidth(2),
  },
});

export default Category;
