// react & react-native
import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  StatusBar,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

// components
import {FoodCard, Gap} from '../../components';
// resource
import {
  ProfileDummy,
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  colors,
  fonts,
  strings,
} from '../../res';

// styles
import {styles} from './styles.js';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const Home = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: FirstRoute,
    2: SecondRoute,
    3: FirstRoute,
  });

  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView style={styles.page}>
        <View style={styles.profileContainer}>
          <View>
            <Text style={styles.appName}>{strings.appName}</Text>
            <Text style={styles.description}>Let's get some foods</Text>
          </View>
          <Image source={ProfileDummy} style={styles.profile} />
        </View>

        <View style={{backgroundColor: colors.superLightGrey}}>
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

        <View style={styles.tabContainer}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
