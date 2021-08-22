import React, {useState} from 'react';
import {View, Text, Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles.js';

const Select = ({label}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  console.log('platform : ', Platform.OS);
  if (Platform.OS === 'ios') {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputForIos}>
          <Picker
            // style={{height: 50, width: 100}}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="TypeScript" value="ts" />
            <Picker.Item label="Python" value="python" />
            <Picker.Item label="PHP" value="php" />
            <Picker.Item label="C" value="c" />
            <Picker.Item label="Dart" value="dart" />
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
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;
