import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/auth/Login';
import RegisterWithOTP from '../screens/auth/RegisterWithOTP';
import FeaturedEstate from '../screens/homepage/FeaturedEstate';
import HomePage from '../screens/homepage/HomePage';
import Notification from '../screens/profile/Notification';
import Profile from '../screens/profile/Profile';
import Villa from '../screens/discover/Category/Villa';
import TopDicount from '../screens/homepage/TopDiscount'
import LocationDetails from '../screens/discover/Category/LocationDetails';
import SearchFilterPage from '../component/homepages/Search/SearchFilterPage';

const Stack = createNativeStackNavigator();

export default function userRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisRegisterWithOTPter"
        component={RegisterWithOTP}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="HomePage"
        component={HomePage}
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
        component={TopDicount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Villa"
        component={Villa}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LocationDetails"
        component={LocationDetails}
        options={{headerShown: false}}
      />
    <Stack.Screen 
      name='SearchFilterPage'
      component={SearchFilterPage}
      options={{headerShown: false}}
    />
      
    </Stack.Navigator>
  );
}
