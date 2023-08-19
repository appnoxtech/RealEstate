import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { colorPrimary, dark } from '../../assets/Styles/GlobalTheme';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Homepage from '../screens/homepage/HomePage';
import Research from '../screens/search/Research';
import Profile from '../screens/profile/Profile';
import ProfileAgent from '../screens/agent/ProfileAgent';
import Shortlisted from '../screens/profile/Shortlisted';
import HomePage from '../screens/agent/HomePage';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const {userDetails} = useSelector((state : any ) => state.user);

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
          if (route.name === 'Homepage') {
            return (
              <Ionicons
                style={(iconName = focused ? styles.iconFocused : styles.icon)}
                name={
                  (iconName = focused ? 'home' : 'home-outline')
                }
              />
            );
          } else if (route.name === 'Search') {
            return (
              <Ionicons
                style={(iconName = focused ? styles.iconFocused : styles.icon)}
                name={
                  (iconName = focused
                    ? 'search' 
                    : 'search-outline')
                }
              />
            );
          }else if (route.name === 'Shortlisted') {
            return (
              <Ionicons
                style={(iconName = focused ? styles.iconFocused : styles.icon)}
                name={(iconName = focused ? 'heart' : 'heart-outline')}
              />
            );
          }  else if (route.name === 'Profile') {
            
            return (
             
               <MaterialIcons
                style={(iconName = focused ? styles.iconFocused : styles.icon)}
                name="account-circle"
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
        name="Homepage"
        component={Homepage}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            // Prevent default action
            e.preventDefault();

            // Do something with the `navigation` object
            navigation.navigate('Homepage');
          },
        })}
        options={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false
        }}
      />
      <Tab.Screen
        name="Search"
        component={Research}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            // Prevent default action
            e.preventDefault();

            // Do something with the `navigation` object
            navigation.navigate('Search');
          },
        })}
        options={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false
        }}
      />
      <Tab.Screen
        name="Shortlisted"
        component={Shortlisted}
        listeners={({navigation, route}) => ({
          tabPress: e => {
            // Prevent default action
            e.preventDefault();

            // Do something with the `navigation` object
            navigation.navigate('Shortlisted');
          },
        })}
        options={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false
        }}
      />
       <Tab.Screen
        name="Profile"
        component={Profile}
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
          tabBarShowLabel: false
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
    color: '#234F68',
  },
  icon: {
    color: dark,
    fontSize: 25,
    fontWeight: 'bold',
  },
  header: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
