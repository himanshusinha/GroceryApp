import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import BottomNavigation from './BottomNavigations';
import {IMAGES, ROUTES} from '../constants';
import {Image, TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import colors from '../constants/colors';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  const navigation = useNavigation();

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
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={IMAGES.bell}
              style={{width: 20, height: 20, marginEnd: 20, tintColor: 'white'}}
            />
          </TouchableOpacity>
        ),
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name={ROUTES.HOME} component={BottomNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
