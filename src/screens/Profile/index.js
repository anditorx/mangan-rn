import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Header,
  TextInput,
  Button,
  Gap,
  ProfileTabSection,
} from '../../components';
import {colors, fonts, ProfileDummy} from '../../res';

const Profile = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <View style={styles.profileDetail}>
          <View style={styles.wrapperPhoto}>
            <TouchableOpacity style={styles.borderPhoto}>
              <Image source={ProfileDummy} style={styles.photoContainer} />
            </TouchableOpacity>
          </View>
          <Text style={styles.userFullName}>Andi Rustianto</Text>
          <Text style={styles.userEmail}>andirusti46@gmail.com</Text>
        </View>
        <View style={styles.contentTabSection}>
          <ProfileTabSection />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  profileDetail: {
    backgroundColor: colors.white,
    paddingBottom: 24,
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
  contentTabSection: {
    flex: 1,
    marginTop: 24,
  },
  userFullName: {
    fontSize: 18,
    fontFamily: fonts.Medium,
    color: colors.black,
    textAlign: 'center',
  },
  userEmail: {
    fontSize: 14,
    fontFamily: fonts.Light,
    color: colors.black,
    textAlign: 'center',
  },
});
