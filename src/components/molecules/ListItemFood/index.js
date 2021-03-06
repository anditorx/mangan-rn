import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import Rating from '../Rating';

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
const ListItemFood = ({
  image,
  title,
  price,
  rating,
  onPress,
  items,
  inProgress,
  totalOrder,
  type,
  date,
  status,
  orderSummary,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        // item list product like homepage
        return (
          <>
            <View style={styles.wrapperTextItem}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>Rp {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        // item list order summary
        return (
          <>
            <View style={styles.wrapperTextItem}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>Rp {price}</Text>
            </View>
            <Text style={styles.txtItems}>{items} items</Text>
          </>
        );
      case 'in-progress':
        // item list in progress
        return (
          <>
            <View style={styles.wrapperTextItem}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>
                {items} items. Rp {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        // item list past orders
        return (
          <>
            <View style={styles.wrapperTextItem}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>
                {items} items. Rp {price}
              </Text>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={styles.wrapperTextItem}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>Rp {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
    }
  };

  return (
    <TouchableOpacity style={styles.listItem(orderSummary)} onPress={onPress}>
      <Image source={image} style={styles.image} />
      {renderContent()}
    </TouchableOpacity>
  );
};

export default ListItemFood;

const styles = StyleSheet.create({
  listItem: orderSummary => ({
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: orderSummary ? 0 : 2,
    borderBottomColor: orderSummary ? null : colors.superLightGrey,
    backgroundColor: colors.white,
  }),
  image: {
    height: 60,
    width: 60,
    overflow: 'hidden',
    borderRadius: 12,
    marginRight: 12,
  },
  wrapperTextItem: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontFamily: fonts.Medium,
    fontSize: 14,
  },
  price: {
    fontFamily: fonts.Regular,
    fontSize: 12,
  },
  txtItems: {
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: colors.black,
  },
  date: {
    fontSize: 10,
    fontFamily: fonts.Regular,
    color: colors.darkGrey,
  },
  status: {
    fontSize: 10,
    fontFamily: fonts.Regular,
    color: colors.red,
  },
});
