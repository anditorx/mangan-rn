// react & react-native
import React, {useState, useEffect} from 'react';
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

// others
import {useSelector, useDispatch} from 'react-redux';
import {getFoodData} from '../../redux/action';
const Home = () => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodData());
  }, [dispatch]);
  return (
    <SafeAreaView style={styles.page}>
      {/* header */}
      <HomeProfile />

      {/* foodcard section */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodcardContainer}>
            <Gap width={24} />
            {food.map((itemFood, index) => {
              return (
                <FoodCard
                  key={index}
                  image={{uri: itemFood.picturePath}}
                  titleFood={itemFood.name}
                  rating={itemFood.rate}
                />
              );
            })}
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
