import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../../constants';
import {moderateVerticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    bottom: 0,
    alignItems: 'flex-end',
  },
  modalContainer: {
    backgroundColor: COLORS.gradientForm,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 18,
    color: COLORS.black,
    marginTop: 14,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 16,
    color: COLORS.DARK_GRAY,
    marginTop: 14,
    textAlign: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
    fontWeight: '500',
    marginTop: moderateVerticalScale(20),
  },
  button: {
    backgroundColor: COLORS.gradientForm,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    height: 50,
    marginTop: moderateVerticalScale(30),
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
  },
});
export default styles;
