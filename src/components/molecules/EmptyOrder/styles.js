import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.Medium,
  },
  subTitle: {
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
