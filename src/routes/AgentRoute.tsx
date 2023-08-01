import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from '../navigation/BottomTabNavigation';
import TopEstateAgent from '../screens/discover/Category/TopEstateAgent';

import AddCityName from '../component/homepages/Modal/AddCityName';
import DetailedPage from '../component/homepages/Search/DetailedPage';
import Notification from '../screens/profile/Notification';
import Profile from '../screens/profile/Profile';
import FallBackSearch from '../component/homepages/Search/FallBackSearch';
import PostProperty from '../screens/homepage/PostProperty/PostProperty';
import PostPropertySecond from '../screens/homepage/PostProperty/PostPropertySecond';
import PostPropertyThird from '../screens/homepage/PostProperty/PostPropertyThird';
import PropertyFeatures from '../screens/homepage/PostProperty/PropertyFeatures';
import CommunicationSetting from '../component/common/Card/CommunicationSetting';
import PropertyListings from '../component/PropertyListings';


const Stack = createNativeStackNavigator();

const AgentRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
        options={{headerShown: false,}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false,}}
      />
      <Stack.Screen
        name="CommunicationSetting"
        component={CommunicationSetting}
        options={{headerShown: false,}}
      />
      <Stack.Screen
        name="PostProperty"
        component={PostProperty}
        options={{headerShown: false,}}
      />
      <Stack.Screen
        name="PostPropertySecond"
        component={PostPropertySecond}
        options={{headerShown: false,}}
      />
       <Stack.Screen
        name="PostPropertyThird"
        component={PostPropertyThird}
        options={{headerShown: false,}}
      />
      <Stack.Screen
        name="PropertyFeatures"
        component={PropertyFeatures}
        options={{headerShown: false,}}
      />
      <Stack.Screen
        name="PropertyListings"
        component={PropertyListings}
        options={{headerShown: false,}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false,}}
      />
      
            <Stack.Screen
        name="FallBackSearch"
        component={FallBackSearch}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="TopEstateAgent"
        component={TopEstateAgent}
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

export default AgentRoute;
