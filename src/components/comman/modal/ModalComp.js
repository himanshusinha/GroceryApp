import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IMAGES} from '../../../constants';
import colors from '../../../constants/colors';

const ModalComp = ({modalVisible, onClose, onLogin, onSignUp}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            height: Dimensions.get('window').height / 4,
            width: '90%',
            borderRadius: 10,
          }}>
          <TouchableOpacity
            style={{alignSelf: 'flex-end', bottom: 30, right: 20}}
            onPress={() => onClose()}>
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={IMAGES.close}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onLogin()}
            style={{
              backgroundColor: colors.gradientForm,
              height: 40,
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text style={{color: 'white'}}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onSignUp()}
            style={{
              backgroundColor: colors.gradientForm,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
              width: '90%',
            }}>
            <Text style={{color: 'white'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default ModalComp;
