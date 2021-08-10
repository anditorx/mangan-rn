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
import ListItemFood from '../ListItemFood';

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

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapperItem}>
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy4}
        title="Garapcha Coffee"
        price="35.000"
        rating="4.3"
      />
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy3}
        title="Rominelo Soup"
        price="47.000"
        rating="4.1"
      />
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy2}
        title="Morrey Manggo Club"
        price="47.000"
        rating="4.6"
      />
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy1}
        title="Orca Hompimpa Fruit"
        price="27.000"
        rating="4.2"
      />
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy1}
        title="Orca Hompimpa Fruit"
        price="27.000"
        rating="4.2"
      />
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy1}
        title="Orca Hompimpa Fruit"
        price="27.000"
        rating="4.2"
      />
    </View>
  );
};
const Popular = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.wrapperItem} showsVerticalScrollIndicator={false}>
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy4}
        title="Garapcha Coffee"
        price="35.000"
        rating="4.3"
      />
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy3}
        title="Rominelo Soup"
        price="47.000"
        rating="4.1"
      />
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy2}
        title="Morrey Manggo Club"
        price="47.000"
        rating="4.6"
      />
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy1}
        title="Orca Hompimpa Fruit"
        price="27.000"
        rating="4.2"
      />
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy1}
        title="Orca Hompimpa Fruit"
        price="27.000"
        rating="4.2"
      />
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy1}
        title="Orca Hompimpa Fruit"
        price="27.000"
        rating="4.2"
      />
    </ScrollView>
  );
};
const Promo = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.wrapperItem} showsVerticalScrollIndicator={false}>
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy4}
        title="Garapcha Coffee"
        price="35.000"
        rating="4.3"
      />
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy3}
        title="Rominelo Soup"
        price="47.000"
        rating="4.1"
      />
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy2}
        title="Morrey Manggo Club"
        price="47.000"
        rating="4.6"
      />
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy1}
        title="Orca Hompimpa Fruit"
        price="27.000"
        rating="4.2"
      />
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy1}
        title="Orca Hompimpa Fruit"
        price="27.000"
        rating="4.2"
      />
      <ListItemFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy1}
        title="Orca Hompimpa Fruit"
        price="27.000"
        rating="4.2"
      />
    </ScrollView>
  );
};

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Promo'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Promo,
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

export default HomeTabSection;

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
