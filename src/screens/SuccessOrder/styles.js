import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../res';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  containerSuccess: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleSuccessOrder: {
    fontSize: 24,
    fontFamily: fonts.Medium,
  },
  subTitleSuccessOrder: {
    fontSize: 14,
    fontFamily: fonts.Light,
  },
  containerButtonFindFoods: {
    width: '100%',
    paddingVertical: 25,
    paddingHorizontal: 50,
  },
});

export {styles};
