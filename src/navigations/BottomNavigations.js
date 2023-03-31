import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, View} from 'react-native';
import {IMAGES, ROUTES} from '../constants';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import Search from '../screens/search/Search';
import WishList from '../screens/wishlist/WishList';
const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image source={IMAGES.home} style={{width: 20, height: 20}} />
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image source={IMAGES.search} style={{width: 20, height: 20}} />
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.WISHLIST}
        component={WishList}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={IMAGES.favourite}
                style={{width: 20, height: 20}}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image source={IMAGES.user} style={{width: 20, height: 20}} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
