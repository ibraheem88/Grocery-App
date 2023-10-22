import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/AntDesign'
import helperSvg from '../helpers/helperSvg';
import { setCart } from '../state/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import { RootState } from '../state/store';
import { RootStackParamList } from '../helpers/types';

type DetailProps = StackScreenProps<RootStackParamList, 'Detail'>

export default function Detail({ route, navigation }: DetailProps) {
  const dispatch = useDispatch()
  const { cart } = useSelector((state: RootState) => state.user)
  const [count, setCount] = useState(0)
  const { item, category } = route.params

  const handleCart = () => {
    const newObj = { ...item, count }
    const newCart = [...cart, newObj]
    dispatch(setCart(newCart))
    navigation.goBack()

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name='chevron-thin-left' size={23} color="black" onPress={() => navigation.goBack()} />
        <Icon2 name='heart-o' size={23} color="black" />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{category}</Text>
        {helperSvg(item.name, '100%', '40%')}
        <View style={styles.priceContainer}>
          <Text style={[styles.price, { fontWeight: 'bold' }]}>{item.price}</Text>
          <Text style={[styles.price, { marginTop: 4 }]}>/kg</Text>
        </View>
        <View style={styles.counterContainer}>
          <TouchableOpacity style={styles.counterButton} onPress={() => { if (count > 0) setCount(count - 1) }}>
            <Icon3 name='minus' size={16} color="black" />
          </TouchableOpacity>
          <Text style={styles.counter}>{count}</Text>
          <TouchableOpacity style={[styles.counterButton, { marginLeft: 25, marginRight: 0 }]} onPress={() => setCount(count + 1)}>
            <Icon3 name='plus' size={16} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.addToCartButton} onPress={() => handleCart()}>
        <Text style={styles.addToCartText}>Add to cart</Text>
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    padding: 35,
  },
  content: {
    paddingHorizontal: 23,
    alignItems: 'center',
  },
  name: {
    color: 'black',
    fontSize: 28,
  },
  category: {
    color: '#606368',
    fontSize: 18,
    marginTop: 11,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  price: {
    fontSize: 24,
    color: '#000000',
    marginBottom: 6,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  counterButton: {
    marginRight: 25,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
  },
  counter: {
    color: 'black',
    fontSize: 24,
  },
  addToCartButton: {
    backgroundColor: '#FF844C',
    position: 'absolute',
    bottom: 27,
    right: 24,
    left: 24,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: 20, color: '#FCFEFF'
  }
})

