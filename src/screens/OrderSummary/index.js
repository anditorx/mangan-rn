import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import {Header, ListItemFood, ItemValue, Button} from '../../components';
import {FoodDummy1, colors, fonts} from '../../res';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
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
            image={{uri: item.picturePath}}
            title={item.name}
            price={item.price}
            items={transaction.totalItem}
            type="order-summary"
            orderSummary
          />
          <Text style={styles.label}>Details Transaction</Text>
          <ItemValue
            type="currency"
            label={item.name}
            value={transaction.totalPrice}
          />
          <ItemValue
            type="currency"
            label="Delivery"
            value={transaction.driver}
          />
          <ItemValue type="currency" label="Tax 10%" value={transaction.tax} />
          <ItemValue
            type="currency"
            label="Total Price"
            value={transaction.total}
            valueColor={colors.topaz}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>Deliver to:</Text>
          <ItemValue label="Name" value={userProfile.name} />
          <ItemValue label="Phone No" value={userProfile.phoneNumber} />
          <ItemValue label="Address" value={userProfile.address} />
          <ItemValue label="House No" value={userProfile.houseNumber} />
          <ItemValue label="City" value={userProfile.city} />
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
