import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../res';

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.black,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.peace,
    borderRadius: 8,
    height: 45,
    padding: 10,
  },
});

export {styles};
