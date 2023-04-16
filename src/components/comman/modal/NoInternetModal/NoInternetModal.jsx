import {View, Text, Modal, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import {COLORS} from '../../../../constants';
const Button = ({children, ...props}) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.buttonText}>{children}</Text>
  </TouchableOpacity>
);
const NoInternetModal = ({show, onRetry, isRetrying}) => {
  return (
    <View>
      <Modal
        isVisible={show}
        style={{flex: 1, backgroundColor: COLORS.white}}
        animationInTiming={600}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.transparent,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: Dimensions.get('window').height / 4,
              backgroundColor: COLORS.white,
            }}>
            <Text style={styles.modalTitle}>Connection Error</Text>
            <Text style={styles.modalText}>
              Oops! Looks like your device is not connected to the Internet.
            </Text>
            <Button
              style={styles.button}
              onPress={onRetry}
              disabled={isRetrying}>
              Try Again
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NoInternetModal;
