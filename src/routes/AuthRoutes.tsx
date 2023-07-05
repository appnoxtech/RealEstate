import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from '../navigation/BottomTabNavigation';
import FeaturedEstate from '../screens/homepage/FeaturedEstate';
import TopDiscount from '../screens/homepage/TopDiscount';
import Villa from '../screens/discover/Category/Villa';
import TopLocation from '../screens/discover/Category/TopLocation';
import TopEstateAgent from '../screens/discover/Category/TopEstateAgent';
import TopLocationPage from '../screens/discover/Category/TopLocationPage'
import LocationDetails from '../screens/discover/Category/LocationDetails'

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
    </Stack.Navigator>
  );
};

export default AuthRoute;
