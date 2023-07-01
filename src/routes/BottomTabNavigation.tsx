import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import {getUserDataFromLocalStorage} from '../../utils/helperFunctions/auth';
// import { useDispatch, useSelector } from 'react-redux';
// import { UpdateShowEditorOptions } from '../../redux/reducers/commonReducer';
// import { store } from '../../interfaces/reducer/state';
// import Search from './Search';
import HomePage from '../screens/homepage/HomePage';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  //   const [userData, setUserData] = useState<any>({});
  //   const {bottomNavigationDisplayProperty} = useSelector((store: store) => store.common);

  //   const dispatch = useDispatch();
  //   const getUserDetails = async () => {
  //     const user = await getUserDataFromLocalStorage();
  //     setUserData(user);
  //   };

  //   useEffect(() => {
  //     getUserDetails();
  //   }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLable: false,
        style: {
          position: absolute,
          bottom: 25,
        },
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: ({focused}) => (
            <Image
              source={require('../../assets/images/HouseActive.png')}
              resizeMode="contain"
              style={{width: 25, height: 35}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: ({focused}) => (
            <Image
              source={require('../../assets/images/Search.png')}
              resizeMode="contain"
              style={{width: 25, height: 35}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: ({focused}) => (
            <Image
              source={require('../../assets/images/Group1.png')}
              resizeMode="contain"
              style={{width: 25, height: 35}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: ({focused}) => (
            <Image
              source={require('../../assets/images/Profile.png')}
              resizeMode="contain"
              style={{width: 25, height: 35}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
