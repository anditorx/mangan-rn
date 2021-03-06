import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../res';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: fonts.Medium,
  },
});

export {styles};
