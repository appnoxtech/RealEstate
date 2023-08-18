import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Button from '../../component/common/buttons/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ModalLayout from '../../component/homepages/Modal/ModalLayout';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import BurgerCard from '../../component/common/Card/BurgerCard';
import MenuCard from '../../component/common/Card/MenuCard';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {dark} from '../../../assets/Styles/GlobalTheme';

const ModalScreen = () => {
  const [visible, setVisible] = useState(false);
  const {userDetails} = useSelector((state: any) => state.user);

  return (
    <View style={styles.container}>
      <ModalLayout visible={visible}>
        <View style={styles.header}>
          <Ionicons
            onPress={() => setVisible(false)}
            name="close"
            style={{height: 30, width: 30}}
            size={20}
            color="white"
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.body}>
            <BurgerCard
              title="Post Property"
              description="Sell/Rent faster with RealEstate"
              iconName="home"
              pageName="PostProperty"
              setVisible={setVisible}
            />
            {userDetails?.role === 'tenant' ? (
              <BurgerCard
                setVisible={setVisible}
                title="Search Properties"
                description="Explore Residential and Commercial Properties"
                iconName="search"
                pageName="SearchFilterPage"
              />
            ) : null}
            <Text style={styles.manageProperty}>MANAGE YOUR PROPERTY</Text>
            <View>
              <MenuCard
                setVisible={setVisible}
                title="Manage/Edit your listings"
                iconName="business-outline"
                pageName="PropertyListings"
              />
            </View>
            <MenuCard
              setVisible={setVisible}
              title="Homepage"
              iconName="home"
              pageName="Homepage"
            />
            <Text style={styles.manageProperty}>PLANS AND SERVICES</Text>
            <BurgerCard
              setVisible={setVisible}
              title="Owner Plans"
              description="Sell/Rent your property with curated plans"
              pageName=""
              iconName="person-circle-outline"
            />
            <BurgerCard
              setVisible={setVisible}
              title="Self-Verify your Property"
              description="Verify your property to show users it as gems"
              pageName=""
              iconName="business-outline"
            />
          </View>
          <Text
            style={{
              color: dark,
              paddingHorizontal: responsiveScreenWidth(4),
              paddingVertical: responsiveScreenHeight(1.5),
            }}>
            RESEARCH AND INSIGHTS
          </Text>
          <View style={{paddingHorizontal: responsiveScreenWidth(2)}}>
            <BurgerCard
              setVisible={setVisible}
              title="Price Trends"
              description="Explore locality and society level price growth"
              pageName=""
              iconName="trending-up-outline"
            />
            <BurgerCard
              setVisible={setVisible}
              title="Locality Insights"
              description="Locality reviews, ratings, safety, commute, landmarks..."
              pageName=""
              iconName="location-outline"
            />
            <BurgerCard
              setVisible={setVisible}
              title="Rating and Reviews"
              description="Read user reviews and ratings on locality "
              pageName=""
              iconName="star-half-outline"
            />
            <BurgerCard
              setVisible={setVisible}
              title="Article and News"
              description="Article, News, Policies, Guides..."
              pageName=""
              iconName="newspaper-outline"
            />

            <MenuCard
              setVisible={setVisible}
              title="Terms of Use"
              pageName=""
              iconName="shield-outline"
            />
            <MenuCard
              setVisible={setVisible}
              title="Customer service"
              pageName=""
              iconName="people-outline"
            />
            <MenuCard
              setVisible={setVisible}
              title="Share Feedback"
              pageName=""
              iconName="newspaper-outline"
            />
          </View>
        </ScrollView>
      </ModalLayout>
      <Button title="Show Modal" onPress={() => setVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: responsiveScreenWidth(1),
    backgroundColor: '#234F68',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  capitalLetter: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: responsiveScreenWidth(4),
    paddingVertical: responsiveScreenHeight(1.6),
    borderRadius: responsiveWidth(6),
  },
  headerName: {
    color: 'white',
    fontSize: responsiveFontSize(3),
  },

  body: {
    flex: 1,
    paddingHorizontal: responsiveScreenWidth(2),
    paddingBottom: responsiveScreenHeight(3)
  },
  manageProperty: {
    color: dark,
    paddingHorizontal: responsiveScreenWidth(4),
    paddingVertical: responsiveScreenHeight(1.5),
  },
});

export default ModalScreen;
