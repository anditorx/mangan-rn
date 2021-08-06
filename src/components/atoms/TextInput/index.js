import React from 'react';
import {View, Text, TextInput as TextInputRN} from 'react-native';
import {styles} from './styles.js';
const TextInput = ({withLabel, placeholder, label}) => {
  if (withLabel) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <TextInputRN style={styles.input} placeholder={placeholder} />
      </View>
    );
  }
  return (
    <View>
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;
