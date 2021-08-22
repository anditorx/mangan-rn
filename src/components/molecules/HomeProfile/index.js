import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

// resource
import {ProfileDummy, colors, fonts, strings} from '../../../res';

const HomeProfile = () => {
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>{strings.appName}</Text>
        <Text style={styles.description}>Let's get some foods</Text>
      </View>
      <Image source={ProfileDummy} style={styles.profile} />
    </View>
  );
};

export default HomeProfile;

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
