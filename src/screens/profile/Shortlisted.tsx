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
// import CustomModal from '../search/Modal';
// import BuyModal from '../../component/homepages/Modal/BuyModal';
// import RentModal from '../../component/homepages/Modal/RentModal';
// import BuyPlotLand from '../../component/homepages/Modal/BuyPlotLand';
// import CoWorkSpace from '../../component/homepages/Modal/CoWorkSpace';
// import LeaseCommercial from '../../component/homepages/Modal/LeaseCommercial';
// import BuyCommercial from '../../component/homepages/Modal/BuyCommercial';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Properties',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Project',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Localities',
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
      <View style={styles.viewContainer}>
        <Text style={styles.shortlist}>Shortlists</Text>
        <Text style={styles.shortlistSecond}>
          Find all your shortlists at one
        </Text>
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
        {/* <CustomModal title={selectedOption} modalOpen={showModal}>
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
      </CustomModal> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight || 0,
  },
  viewContainer: {
    paddingHorizontal: responsiveScreenWidth(4),
  },
  item: {
    paddingHorizontal: responsiveScreenWidth(3),
    borderWidth: 1,
    borderColor: '#F5F4F8',
    borderRadius: 30,
    marginHorizontal: responsiveScreenWidth(1),
  },
  title: {
    color: '#234F68',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.7),
    padding: responsiveScreenWidth(2),
  },
  shortlist: {
    fontSize: responsiveFontSize(3),
  },
  shortlistSecond: {
    fontSize: responsiveFontSize(2),
  },
});

export default Category;
