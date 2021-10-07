import React, {useState, useEffect} from 'react';
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

// others
import {useSelector, useDispatch} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action';

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
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const types = 'new_food';
  const {newTaste} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes(types));
  }, [dispatch]);
  return (
    <View style={styles.wrapperItem}>
      {newTaste.map((item, index) => {
        return (
          <ListItemFood
            key={item.id}
            image={{uri: item.picturePath}}
            title={item.name}
            price={item.price}
            rating={item.rate}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
  );
};
const Popular = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const types = 'popular';
  const {popular} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes(types));
  }, [dispatch]);
  return (
    <View style={styles.wrapperItem}>
      {popular.map((item, index) => {
        return (
          <ListItemFood
            key={item.id}
            onPress={() => navigation.navigate('FoodDetail', item)}
            image={{uri: item.picturePath}}
            title={item.name}
            price={item.price}
            rating={item.rate}
          />
        );
      })}
    </View>
  );
};
const Promo = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const types = 'recommended';
  const {recommended} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes(types));
  }, [dispatch]);
  return (
    <View style={styles.wrapperItem}>
      {recommended.map((item, index) => {
        return (
          <ListItemFood
            key={item.id}
            onPress={() => navigation.navigate('FoodDetail', item)}
            image={{uri: item.picturePath}}
            title={item.name}
            price={item.price}
            rating={item.rate}
          />
        );
      })}
    </View>
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
