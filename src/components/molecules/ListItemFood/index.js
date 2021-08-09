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
const ListItemFood = ({image, title, price, rating, onPress}) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.wrapperTextItem}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>Rp {price}</Text>
      </View>
      <Rating rating={rating} />
    </TouchableOpacity>
  );
};

export default ListItemFood;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.superLightGrey,
  },
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
});
