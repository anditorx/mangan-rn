import React, {useEffect, useState} from 'react';
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
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {getInProgress, getPastOrders} from '../../../redux/action/orderAction';

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
  const dispatch = useDispatch();
  const {inProgress} = useSelector(state => state.orderReducer);
  useEffect(() => {
    dispatch(getInProgress());
  }, [dispatch]);
  return (
    <View style={styles.wrapperItem}>
      {inProgress.map(order => {
        return (
          <ListItemFood
            key={order.id}
            onPress={() => navigation.navigate('OrderDetail', order)}
            image={{uri: order.food.picturePath}}
            title={order.food.name}
            price={order.total}
            rating={order.food.rate}
            inProgress
            items={order.quantity}
            type="in-progress"
          />
        );
      })}
    </View>
  );
};
const PastOrders = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pastOrders} = useSelector(state => state.orderReducer);

  useEffect(() => {
    dispatch(getPastOrders());
  }, [dispatch]);
  return (
    <ScrollView style={styles.wrapperItem} showsVerticalScrollIndicator={false}>
      {pastOrders.map(order => {
        return (
          <ListItemFood
            key={order.id}
            onPress={() => navigation.navigate('OrderDetail', order)}
            image={{uri: order.food.picturePath}}
            title={order.food.name}
            price={order.total}
            rating={order.food.rate}
            type="past-orders"
            date={order.created_at}
            items={order.quantity}
            status={order.status}
          />
        );
      })}
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
