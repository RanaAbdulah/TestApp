import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';

import {styles} from './Style';

import Theme from '../Utils/Theme';
import Home from '../Screens/Home/Home';

const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: Theme.hp('7%'),
    background: '#fff',
  },
  tabBarLabelStyle: {
    color: 'black',
  },

  tabBarHideOnKeyboard: true,
};
export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.View}>
                <Entypo
                  name="home"
                  size={23}
                  color={focused ? 'black' : '#767A8B'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Quran"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.View}>
                <Image
                  style={styles.Image}
                  resizeMode="contain"
                  source={require('../Asset/Quran.png')}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.View}>
                <Ionicons
                  name="search"
                  size={24}
                  color={focused ? 'black' : '#767A8B'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.View}>
                <Ionicons
                  name="person"
                  size={24}
                  color={focused ? 'black' : '#767A8B'}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
