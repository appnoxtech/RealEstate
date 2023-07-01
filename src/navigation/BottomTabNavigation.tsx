import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { colorPrimary } from '../../assets/Styles/GlobalTheme';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from '../screens/homepage/HomePage';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  // const dispatch = useDispatch();
  // const [userData, setUserData] = useState<any>({});

  // const getUserDetails = async () => {
  //   const user = await getUserDataFromLocalStorage();
  //   setUserData(user);
  // };

  // useEffect(() => {
  //   getUserDetails();
  // }, []);

  return (
    <Tab.Navigator
      //@ts-ignore
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Cars') {
            return (
              <Ionicons
                style={(iconName = focused ? styles.iconFocused : styles.icon)}
                name={
                  (iconName = focused ? 'md-car-sport' : 'md-car-sport-outline')
                }
              />
            );
          } else if (route.name === 'Mechanic') {
            return (
              <MaterialCommunityIcons
                style={(iconName = focused ? styles.iconFocused : styles.icon)}
                name={
                  (iconName = focused
                    ? 'hammer-screwdriver'
                    : 'hammer-screwdriver')
                }
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <MaterialIcons
                style={(iconName = focused ? styles.iconFocused : styles.icon)}
                name="account-circle"
              />
            );
          } else if (route.name === 'My Books') {
            return (
              <Ionicons
                style={(iconName = focused ? styles.iconFocused : styles.icon)}
                name={(iconName = focused ? 'book' : 'book-outline')}
              />
            );
          } else if (route.name === 'Dashboard') {
            return (
              <MaterialCommunityIcons
                style={(iconName = focused ? styles.iconFocused : styles.icon)}
                name={
                  (iconName = focused
                    ? 'view-dashboard'
                    : 'view-dashboard-outline')
                }
              />
            );
          }
        },
        tabBarActiveTintColor: colorPrimary,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: responsiveFontSize(1.5),
          fontWeight: 'bold',
          letterSpacing: 0.8,
        },
      })}>
      <Tab.Screen
        name="Cars"
        component={HomePage}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            // Prevent default action
            e.preventDefault();

            // Do something with the `navigation` object
            navigation.navigate('Cars');
          },
        })}
        options={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            // Prevent default action
            e.preventDefault();

            // Do something with the `navigation` object
            navigation.navigate('HomePage');
          },
        })}
        options={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomePage}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            // Prevent default action
            e.preventDefault();

            // Do something with the `navigation` object
            navigation.navigate('Profile');
          },
        })}
        options={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  iconFocused: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colorPrimary,
  },
  icon: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
