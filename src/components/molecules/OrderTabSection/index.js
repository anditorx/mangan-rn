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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapperItem}>
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy4}
        title="Garapcha Coffee"
        price="35.000"
        rating="4.3"
        inProgress
        items={3}
        type="in-progress"
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy3}
        title="Rominelo Soup"
        price="47.000"
        rating="4.1"
        inProgress
        items={3}
        type="in-progress"
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy2}
        title="Morrey Manggo Club"
        price="47.000"
        rating="4.6"
        inProgress
        items={3}
        type="in-progress"
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy1}
        title="Orca Hompimpa Fruit"
        price="27.000"
        rating="4.2"
        inProgress
        items={3}
        type="in-progress"
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy1}
        title="Orca Hompimpa Fruit"
        price="27.000"
        rating="4.2"
        inProgress
        items={3}
        type="in-progress"
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy1}
        title="Orca Hompimpa Fruit"
        price="27.000"
        rating="4.2"
        inProgress
        items={3}
        type="in-progress"
      />
    </View>
  );
};
const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.wrapperItem} showsVerticalScrollIndicator={false}>
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy4}
        title="Garapcha Coffee"
        price="35.000"
        rating="4.3"
        type="past-orders"
        date="21 Jun 2021"
        items={3}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy3}
        title="Rominelo Soup"
        price="47.000"
        rating="4.1"
        type="past-orders"
        date="21 Jun 2021"
        items={3}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy2}
        title="Morrey Manggo Club"
        price="47.000"
        rating="4.6"
        type="past-orders"
        date="21 Jun 2021"
        items={3}
        status="Canceled"
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy1}
        title="Orca Hompimpa Fruit"
        price="27.000"
        rating="4.2"
        type="past-orders"
        date="21 Jun 2021"
        items={3}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy1}
        title="Orca Hompimpa Fruit"
        price="27.000"
        rating="4.2"
        type="past-orders"
        date="21 Jun 2021"
        items={3}
      />
      <ListItemFood
        onPress={() => navigation.navigate('OrderDetail')}
        image={FoodDummy1}
        title="Orca Hompimpa Fruit"
        price="27.000"
        rating="4.2"
        type="past-orders"
        date="21 Jun 2021"
        items={3}
      />
    </ScrollView>
  );
};

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
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

export default OrderTabSection;

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
