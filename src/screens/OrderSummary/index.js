import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import {Header, ListItemFood, ItemValue, Button} from '../../components';
import {FoodDummy1, colors, fonts} from '../../res';

const OrderSummary = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView>
        <Header
          onPressIcBack={() => navigation.pop()}
          title="Order Summary"
          subTitle="You deserve better meal"
        />
        <View style={styles.content}>
          <Text style={styles.label}>Item Ordered</Text>
          <ListItemFood
            image={FoodDummy1}
            title="Title Food"
            price="36.000"
            items={6}
          />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue label="Title Food" value="IDR 36.000" />
          <ItemValue label="Delivery" value="IDR 7.000" />
          <ItemValue label="Tax 10%" value="IDR 3.600" />
          <ItemValue
            label="Total Price"
            value="IDR 37.600"
            valueColor={colors.topaz}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label="Name" value="Andito" />
          <ItemValue label="Phone No" value="085881902847" />
          <ItemValue label="Address" value="Sentral Alam, Bogor" />
          <ItemValue label="House No" value="14" />
          <ItemValue label="City" value="Bogor" />
        </View>

        <View style={styles.wrapperButton}>
          <Button
            textButton="Checkout Now"
            onPress={() => navigation.replace('SuccessOrder')}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 12,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: colors.black,
  },
  wrapperButton: {
    paddingHorizontal: 24,
    marginTop: 16,
  },
});
