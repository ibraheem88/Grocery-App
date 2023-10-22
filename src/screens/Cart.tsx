import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Pressable, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import Icon3 from 'react-native-vector-icons/AntDesign'
import helperSvg from '../helpers/helperSvg';
import { setCart } from '../state/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { MyTabParamList, Product, RootStackParamList, useAppSelector } from '../helpers/types';
import { RootState } from '../state/store';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type CartProps = StackScreenProps<RootStackParamList, 'CartScreen'> | BottomTabScreenProps<MyTabParamList, 'Cart'>



const Cart = ({ }: CartProps) => {
  const dispatch = useDispatch()
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const { cart } = useAppSelector((state) => state.user)
  const [loading, setLoading] = useState(false)

  const handleDelete = (i: number) => {
    const newCart = cart?.filter((item: Product, index: number) => index !== i)
    dispatch(setCart(newCart))
  }

  const onCheckout = () => {
    setLoading(true)
    setTimeout(() => {
      const newCart: Product[] = []
      dispatch(setCart(newCart))
      setLoading(false)
      navigation.navigate('CheckoutScreen')
    }, 2000)
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.header}>
        <Icon name='chevron-thin-left' size={23} color="black" onPress={() => navigation.goBack()} />
        <Text style={{ color: 'black', fontSize: 22, textAlign: 'center', flex: 1 }}>Cart</Text>
      </View>
      {cart.length > 0 ? (<><FlatList
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 90, paddingHorizontal: 24 }}
        data={cart}
        renderItem={({ item, index }) => (
          <View style={{
            flexDirection: 'row', marginBottom: 31, backgroundColor: '#FFFFFF', borderRadius: 12,
            justifyContent: 'space-evenly'
          }}>
            <View style={{ alignItems: 'center' }}>
              {helperSvg(item.name, 100, 100)}
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={[styles.weight]}>weight</Text>
                <Text style={[styles.weight, { fontWeight: 'bold', marginLeft: 5 }]}>{item.weight}</Text>
              </View>
            </View>
            <View style={{ alignSelf: 'center' }}>
              <Text style={{ color: 'black', fontWeight: 'bold', marginBottom: 8 }}>{item.name}</Text>
              <Text style={{ color: 'black', fontSize: 10 }}>Total is ${(parseInt(item.price.replace('$', '')) / 1000) * parseInt(item.weight.replace('g', ''))} by weight</Text>
            </View>
            <View style={{ justifyContent: "space-between", flex: 1 }}>
              <Icon3 name='minus' size={16} color="black" style={{ alignSelf: 'flex-end', marginRight: 10, marginTop: 14, padding: 10 }}
                onPress={() => handleDelete(index)} />
              <Pressable style={{ backgroundColor: '#FF844C', padding: 10, borderRadius: 8, marginBottom: 18, marginHorizontal: 14, alignItems: 'center' }}>
                <Text style={{ fontSize: 12, color: '#F8F9FD' }}>Change</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
        <TouchableOpacity style={styles.checkoutButton} onPress={() => onCheckout()}>
          {loading ? <ActivityIndicator size={20} color={"white"} /> : <Text style={styles.checkoutText}>Checkout</Text>}

        </TouchableOpacity></>) : <><Lottie
          source={require('../asstes/empty-box.json')}
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
          Nothing to Check Out!
        </Text></>}
    </View>
  );
}

export default Cart

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  weight: {
    fontSize: 12,
    color: '#000000',
    marginBottom: 6,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 35,
  },
  name: {
    color: 'black',
    fontSize: 28,
  },
  checkoutButton: {
    backgroundColor: '#FF844C',
    position: 'absolute',
    bottom: 27,
    right: 24,
    left: 24,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutText: {
    fontSize: 20, color: '#FCFEFF'
  }
})

