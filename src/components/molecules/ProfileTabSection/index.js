import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';

import Rating from '../Rating';
import ListItemMenu from '../ListItemMenu';

// resource
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  colors,
  fonts,
  strings,
} from '../../../res';

import AsyncStorage from '@react-native-async-storage/async-storage';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorTabBar}
    style={styles.wrapperTabBar}
    tabStyle={styles.tabStyleTabBar}
    renderLabel={({route, focused, color}) => (
      <Text style={styles.textTabBar(focused)}>{route.title}</Text>
    )}
  />
);

const Account = () => {
  const navigation = useNavigation();
  const signOut = () => {
    AsyncStorage.multiRemove(['@userData', '@token']).then(result => {
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
  };

  return (
    <View style={styles.wrapperItem}>
      <ListItemMenu text="Edit Profile" />
      <ListItemMenu text="Home Address" />
      <ListItemMenu text="Security" />
      <ListItemMenu text="Payment" />
      <ListItemMenu text="Sign Out" onPress={signOut} />
    </View>
  );
};
const FoodMarket = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.wrapperItem} showsVerticalScrollIndicator={false}>
      <ListItemMenu text="Rate App" />
      <ListItemMenu text="Help Center" />
      <ListItemMenu text="Privacy Police" />
      <ListItemMenu text="Terms & Conditions" />
    </ScrollView>
  );
};

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'Food Market'},
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: FoodMarket,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default ProfileTabSection;

const styles = StyleSheet.create({
  indicatorTabBar: {
    backgroundColor: colors.primary,
    height: 5,
  },
  tabStyleTabBar: {
    justifyContent: 'center',
    paddingRight: 20,
  },
  wrapperTabBar: {
    backgroundColor: colors.white,
    elevation: 0,
    shadowOpacity: 0,
  },
  textTabBar: focused => ({
    fontFamily: fonts.Medium,
    fontSize: 14,
    color: focused ? colors.black : colors.peace,
    textAlign: 'center',
  }),
  wrapperItem: {
    paddingVertical: 8,
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 24,
  },
});
