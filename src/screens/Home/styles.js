import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../res';

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: colors.white,
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 8,
  },
  appName: {
    fontSize: 22,
    fontFamily: fonts.Medium,
    color: colors.black,
  },
  description: {
    fontSize: 14,
    fontFamily: fonts.Light,
    color: colors.darkGrey,
  },
});

export {styles};
