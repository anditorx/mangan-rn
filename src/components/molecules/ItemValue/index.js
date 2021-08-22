import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts, colors} from '../../../res';

const ItemValue = ({label, value, valueColor}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value(valueColor)}>{value}</Text>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    color: colors.darkGrey,
  },
  value: valueColor => ({
    fontFamily: valueColor ? fonts.Medium : fonts.Regular,
    fontSize: 14,
    color: valueColor ? valueColor : colors.black,
  }),
});
