import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ProductTour01 from '../screens/auth/OnBoarding/ProductTour01';
import ProductTour02 from '../screens/auth/OnBoarding/ProductTour02';
import ProductTour03 from '../screens/auth/OnBoarding/ProductTour03';
import SplashScreen from '../screens/auth/OnBoarding/SplashScreen';
import TourHeader from '../screens/auth/OnBoarding/TourHeader';
import RegisterWithOTP from '../screens/auth/RegisterWithOTP';
import SuccessPage from '../screens/auth/SuccessPage';
import UserType from '../screens/auth/UserType';
import {storeData, getItem} from '../hooks/CommonHooks/storageHelper';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export default function UnAuthRoutes() {
  const {hasLaunched} = useSelector((store: any) => store.common);
  if (hasLaunched) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterWithOTP"
          component={RegisterWithOTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectUserType"
          component={UserType}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SuccessPage"
          component={SuccessPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }else{
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductTour01"
          component={ProductTour01}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductTour02"
          component={ProductTour02}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductTour03"
          component={ProductTour03}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }

}
