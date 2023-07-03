import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from '../navigation/BottomTabNavigation';
import FeaturedEstate from '../screens/homepage/FeaturedEstate';
import TopDiscount from '../screens/homepage/TopDiscount';
import Villa from '../screens/discover/Category/Villa';

const Stack = createNativeStackNavigator();

const AuthRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomNavigation"
        component={BottomTabNavigation}
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
    </Stack.Navigator>
  );
};

export default AuthRoute;
