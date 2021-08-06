import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../res';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  wrapperPhoto: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  addPhoto: {
    fontSize: 13,
    fontFamily: fonts.Light,
    color: colors.black,
    textAlign: 'center',
  },
  photoContainer: {
    padding: 24,
    backgroundColor: colors.lightGrey,
    height: 90,
    width: 90,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderPhoto: {
    borderWidth: 4,
    borderColor: colors.lightGrey,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperButtonSignUp: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingBottom: 35,
  },
});

export {styles};
