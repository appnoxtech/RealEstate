import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from '../navigation/BottomTabNavigation';
import FeaturedEstate from '../screens/homepage/FeaturedEstate';
import TopDiscount from '../screens/homepage/TopDiscount';
import Villa from '../screens/discover/Category/Villa';
import TopLocation from '../screens/discover/Category/TopLocation';
import TopEstateAgent from '../screens/discover/Category/TopEstateAgent';
import TopLocationPage from '../screens/discover/Category/TopLocationPage';
import LocationDetails from '../screens/discover/Category/LocationDetails';
import ListOfProperty from '../component/homepages/Search/ListOfProperty/ListOfProperty';
import SearchFilterPage from '../component/homepages/Search/SearchFilterPage';
import HomePage from '../screens/homepage/HomePage';
import AddCityName from '../component/homepages/Modal/AddCityName';
import DetailedPage from '../component/homepages/Search/DetailedPage';
import Notification from '../screens/profile/Notification';
import Profile from '../screens/profile/Profile';

const Stack = createNativeStackNavigator();

const AuthRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false, animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
        options={{headerShown: false, animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false, animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false, animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="FeaturedEstate"
        component={FeaturedEstate}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopDicount"
        component={TopDiscount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Villa"
        component={Villa}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopLocation"
        component={TopLocation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopEstateAgent"
        component={TopEstateAgent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopLocationPage"
        component={TopLocationPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LocationDetails"
        component={LocationDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListOfProperty"
        component={ListOfProperty}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchFilterPage"
        component={SearchFilterPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddCityName"
        component={AddCityName}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailedPage"
        component={DetailedPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthRoute;
