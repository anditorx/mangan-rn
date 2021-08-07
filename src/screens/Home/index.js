// react & react-native
import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, StatusBar} from 'react-native';

// components
import {FoodCard, Gap, HomeTabSection, HomeProfile} from '../../components';
// resource
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  colors,
} from '../../res';

// styles
import {styles} from './styles.js';

const Home = () => {
  return (
    <SafeAreaView style={styles.page}>
      {/* header */}
      <HomeProfile />

      {/* foodcard section */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodcardContainer}>
            <Gap width={24} />
            <FoodCard
              image={FoodDummy1}
              titleFood="Orca Hompimpa Fruit"
              rating={4.2}
            />
            <FoodCard
              image={FoodDummy2}
              titleFood="Morrey Manggo Club"
              rating={4.6}
            />
            <FoodCard
              image={FoodDummy3}
              titleFood="Rominelo Soup"
              rating={4.3}
            />
            <FoodCard
              image={FoodDummy4}
              titleFood="Garapcha Coffee"
              rating={4.0}
            />
          </View>
        </ScrollView>
      </View>

      {/* tab section */}
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </SafeAreaView>
  );
};

export default Home;
