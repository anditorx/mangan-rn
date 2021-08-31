import React, {useState} from 'react';
import {View, Text, Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles.js';

const Select = ({label, value, onSelectChange}) => {
  console.log('platform : ', Platform.OS);
  if (Platform.OS === 'ios') {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputForIos}>
          <Picker
            // style={{height: 50, width: 100}}
            selectedValue={value}
            onValueChange={(itemValue, itemIndex) => onSelectChange(itemValue)}>
            <Picker.Item label="Jakarta" value="jakarta" />
            <Picker.Item label="Tangerang" value="tangerang" />
            <Picker.Item label="Bogor" value="bogor" />
            <Picker.Item label="Bekasi" value="bekasi" />
            <Picker.Item label="Bandung" value="bandung" />
          </Picker>
        </View>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          // style={{height: 50, width: 100}}
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) => onSelectChange(itemValue)}>
          <Picker.Item label="Jakarta" value="jakarta" />
          <Picker.Item label="Tangerang" value="tangerang" />
          <Picker.Item label="Bogor" value="bogor" />
          <Picker.Item label="Bekasi" value="bekasi" />
          <Picker.Item label="Bandung" value="bandung" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;
