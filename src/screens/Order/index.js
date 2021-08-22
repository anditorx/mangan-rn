import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  Header,
  TextInput,
  Button,
  Gap,
  Select,
  EmptyOrder,
  OrderTabSection,
} from '../../components';
import {colors, IlEmptyOrder} from '../../res';
import {styles} from './styles.js';

const Order = ({navigation}) => {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        {isEmpty ? (
          <EmptyOrder />
        ) : (
          <View style={styles.content}>
            <Header title="Your Orders" subTitle="Wait for the best meal" />
            <View style={styles.tabContainer}>
              <OrderTabSection />
            </View>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default Order;
