import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res';

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color ? color : colors.primary,
    padding: 8,
    borderRadius: 12,
  }),
  textButton: fontColor => ({
    color: fontColor ? fontColor : colors.black,
    fontFamily: fonts.Medium,
    fontSize: 16,
    textAlign: 'center',
  }),
  containerDisable: {
    backgroundColor: colors.lightGrey,
    padding: 8,
    borderRadius: 12,
  },
  textButtonDisable: {
    color: colors.peace,
    fontFamily: fonts.Medium,
    fontSize: 16,
    textAlign: 'center',
  },
});

export {styles};
