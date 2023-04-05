import React from 'react';
import { View, Text,StyleSheet,Pressable} from 'react-native';
import helperSvg from '../helpers/helperSvg';
import Plus from '../asstes/plus.svg'

export default CategoryItem = ({ item,navigation,category }) => {
    return (
      <Pressable style={styles.listItem} onPress={()=>navigation.navigate('Detail',{item,category})}>
          <View style={{alignSelf:'center'}}>
          {helperSvg(item.name)}
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={styles.itemDetails}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={[styles.weight]}>weight</Text>
          <Text style={[styles.weight,{fontWeight:'bold',marginLeft:5}]}>{item.weight}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={[styles.price,{fontWeight:'bold',fontSize:16}]}>{item.price}</Text>
          <Text style={[styles.price,{marginTop:4}]}>/kg</Text>
          </View>
        </View>
        <View style={{backgroundColor:'#FF844C',width:28,height:28,alignItems:'center',justifyContent:'center',borderRadius:8,alignSelf:'flex-end'}}>
          <Plus/>
        </View>
        </View>
      </Pressable>
    );
  };

  const styles = StyleSheet.create({
    listItem: {
      width:156,
      borderRadius:12,
      backgroundColor:'#FFFFFF',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    itemDetails: {
      paddingLeft:20,
      
    },
    name: {
      color:'black',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    weight: {
      fontSize: 12,
      color: '#000000',
      marginBottom: 6,
    },
    price: {
      fontSize: 12,
      color: '#000000',
      marginBottom: 6,
    },
  });
  