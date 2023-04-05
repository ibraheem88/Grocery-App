import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,FlatList } from 'react-native';
import CategoryItem from '../components/CategoryItem';




const RenderCategories = ({ category, categories,navigation }) => {
  const [showAll, setShowAll] = useState(false);
  const [displayItems,setDisplayItems]=useState()

useEffect(()=>{
 setDisplayItems(showAll ? categories : categories.slice(0, 3))
},[showAll])

  return (
    <View style={styles.category}>
      <View style={styles.header}>
        <Text style={styles.categoryTitle}>{category}</Text>
        {categories.length > 3 && (
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
      renderItem={({item})=><CategoryItem key={item.name} item={item} navigation={navigation} category={category}/>}
      
      />
    </View>
  );
};


export default RenderCategories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#E5E5E5"
  },
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
  listItem: {
    width:156,
    borderRadius:12,
    backgroundColor:'#FFFFFF',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  image: {
    width: 122,
    height: 113,
    marginRight: 16,
    borderRadius: 8,
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