import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.Medium,
    color: colors.black,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.Light,
    color: colors.darkGrey,
  },
});

export {styles};
