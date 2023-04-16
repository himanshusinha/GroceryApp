import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import BottomNavigation from './BottomNavigations';
import {IMAGES, ROUTES} from '../constants';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import colors from '../constants/colors';
import {useSelector} from 'react-redux';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.cart);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: 'Grocery App',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: colors.gradientForm,
        },
        headerLeft: props => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image
              source={IMAGES.menu}
              style={{
                width: 20,
                height: 20,
                marginStart: 20,
                tintColor: 'white',
              }}
            />
          </TouchableOpacity>
        ),

        headerRight: props => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES.WISHLIST);
            }}>
            <Image
              source={IMAGES.cart}
              style={{width: 20, height: 20, marginEnd: 20, tintColor: 'white'}}
            />
            <View
              style={{
                width: 15,
                height: 15,
                borderRadius: 7,
                right: 10,
                bottom: 10,
                backgroundColor: 'red',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 13, alignSelf: 'center'}}>
                {items?.length}
              </Text>
            </View>
          </TouchableOpacity>
        ),
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name={ROUTES.HOME} component={BottomNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
