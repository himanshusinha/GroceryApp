import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: 'black',
    alignItems: 'center',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 18,
    textAlign: 'justify',
    color: colors.black,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  quantityContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 30,
    height: 30,
    backgroundColor: colors.primary,
  },
  selectedListItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    borderColor: '#E8DEF8',
    borderWidth: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: 'black',
    alignItems: 'center',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
});
export default styles;
