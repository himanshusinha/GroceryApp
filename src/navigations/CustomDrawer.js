import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {IMAGES, ROUTES} from '../constants';

const CustomDrawer = props => {
  const {navigation} = props;
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label=" "
        icon={() => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.NOTIFICATIONS)}
              style={{
                width: '100%',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={IMAGES.bell}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text style={{marginStart: 10}}>Notifi</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
