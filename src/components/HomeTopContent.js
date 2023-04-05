import React,{useState} from 'react';
import { View, Text, StyleSheet,FlatList, Pressable } from 'react-native';
import Marker from '../asstes/marker.svg'
import Avatar from '../asstes/avatar.svg'
import { ScrollView } from 'react-native-gesture-handler';
import { foodCategories } from '../asstes/dummyData/foodCategories';

const HomeTopContent = () => {
  const [active,setActive]=useState(0)

  return (
    <View>
    <View style={styles.topContainer}>
    <View style={styles.greetingContainer}>
      <Text style={styles.goodMorningText}>Good Morning</Text>
      <Text style={styles.name}>Ghazi</Text>
      <View style={{flexDirection:'row'}}>
      <Marker
        width={20}
        height={20}
      />
      <Text style={styles.locationText}>Tlogomas, Malang</Text>
      </View>
      
    </View>
    <View style={styles.vectorImage} />
    <View style={styles.avatarImage}>
    <Avatar
    />
    </View>
  </View>
  <ScrollView horizontal style={{marginTop:60,}} contentContainerStyle={{flexGrow:1,paddingHorizontal:24,}}>
{foodCategories.map((item,index)=><Pressable style={{flexDirection:'row',paddingVertical:12,paddingHorizontal:22, backgroundColor:'white',marginLeft:13,borderRadius:40}}
onPress={()=>setActive(index)} key={index}>
  <Text style={{color:'black',fontSize:active==index ? 16 : 14,marginRight:5}}>{item.category}</Text>
  {item.item}
</Pressable>)}
  </ScrollView>
  </View>
  );
};

export default HomeTopContent

const styles = StyleSheet.create({
    topContainer: {
        marginTop:40,
        flexDirection:'row'
      },
      greetingContainer: {
        width: 121,
        height: 138,
        left: 24,
        top: 24,
      },
      goodMorningText: {
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 22,
        color: '#000000',
        marginBottom: 8,
      },
      name: {
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 32,
        color: '#000000',
        marginBottom:9
      },
      locationText: {
        marginLeft:5,
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        color: '#000000',
      },
      vectorImage: {
        position: 'absolute',
        width:72,
        height:72,
        right:30,
        top:30,
        backgroundColor: '#F4F4FC',
      },
      avatarImage: {
        position:'absolute',
        width: 72,
        height: 72,
        right:25,
        top:40
      },
  });