// react & react-native
import React from 'react';
import {Text, View, Image, SafeAreaView} from 'react-native';

// components

// resource
import {ProfileDummy, colors, fonts, strings} from '../../res';

// styles
import {styles} from './styles.js';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.profileContainer}>
          <View>
            <Text style={styles.appName}>{strings.appName}</Text>
            <Text style={styles.description}>Let's get some foods</Text>
          </View>
          <Image source={ProfileDummy} style={styles.profile} />
        </View>
        <Text>HomePageScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
