import React from 'react';
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
} from '../../components';
import {colors, IlEmptyOrder} from '../../res';
import {styles} from './styles.js';

const Order = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView style={styles.screen}>
        <EmptyOrder />
      </SafeAreaView>
    </>
  );
};

export default Order;
