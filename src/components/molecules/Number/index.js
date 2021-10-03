import React from 'react';
import {View, Text} from 'react-native';
import NumberFormat from 'react-number-format';

const Number = ({number, type}) => {
  if (type === 'decimal') {
    return (
      <NumberFormat
        value={number}
        decimalSeparator="."
        decimalScale={1}
        displayType="text"
        fixedDecimalScale
        renderText={value => <Text>{value}</Text>}
      />
    );
  }
  return (
    <NumberFormat
      value={number}
      thousandSeparator="."
      decimalSeparator=","
      displayType="text"
      prefix="IDR "
      renderText={value => <Text>{value}</Text>}
    />
  );
};

export default Number;
