import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import Lottie from 'lottie-react-native';
import { RootStackParamList } from '../helpers/types';
import { StackScreenProps } from '@react-navigation/stack';

type CheckoutProps = StackScreenProps<RootStackParamList, 'CheckoutScreen'>

export default function Checkout({ navigation }: CheckoutProps) {
  return (
    <View style={[styles.container]}>
      <View style={styles.header}>
        <Icon name='chevron-thin-left' size={23} color="black" onPress={() => navigation.replace('HomeStack')} />
        <Text style={{ color: 'black', fontSize: 22, textAlign: 'center', flex: 1 }}>Cart</Text>
      </View>
      <Lottie
        source={require('../asstes/done.json')}
        testID="verifiedAnimation"
        autoPlay
        loop
        style={{ height: 200, alignSelf: 'center' }}
      />
      <Text
        style={{
          fontWeight: 'bold',
          color: 'black',
          fontSize: 16,
          marginBottom: 10,
          textAlign: 'center',
        }}>
        Order Checked Out!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 35,
  },
})

