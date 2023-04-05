import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,FlatList } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import RecommendationItem from './RecommendationItem';


const RenderHomeSections = ({ category, items,navigation }) => {
  const [showAll, setShowAll] = useState(false);
  const [displayItems,setDisplayItems]=useState()

useEffect(()=>{
 setDisplayItems(showAll ? items : items.slice(0, 3))
},[showAll])

  return (
    <View style={styles.category}>
      <View style={styles.header}>
        <Text style={styles.categoryTitle}>{category}</Text>
        {items.length > 3 && (
          <TouchableOpacity onPress={() => setShowAll(!showAll)} >
            <Text style={styles.showAll}>{showAll ? 'SHOW LESS' : 'SHOW ALL'}</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
      contentContainerStyle={{    paddingHorizontal: 24,}}
      horizontal
      data={displayItems}
      ItemSeparatorComponent={<View  style={{width:28}}/>}
      renderItem={({item})=>category=='Top Products' ? <CategoryItem key={item.name} item={item} category={category} navigation={navigation}/>
    : <RecommendationItem key={item.name} item={item} category={category} navigation={navigation}/>}
      
      />
    </View>
  );
};



export default RenderHomeSections

const styles = StyleSheet.create({
  category: {
    paddingTop: 24,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  categoryTitle: {
    color:'black',
    fontSize: 24,
    fontWeight: '700',
  },
  showAll: {
    fontSize: 10,
    color: 'black',
    fontWeight:'400'
  },
  name: {
    color:'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});