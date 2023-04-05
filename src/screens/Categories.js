import React from 'react';
import { View, StyleSheet,FlatList } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import RenderCategories from '../components/RenderCategories';
import categories from '../asstes/dummyData/categories';



const Categories= ({navigation}) => {
    const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.container}>

    <FlatList
    contentContainerStyle={{paddingBottom:tabBarHeight+20}}
    data={categories}
    renderItem={({item})=>
<RenderCategories key={item.category} category={item.category} categories={item.items} navigation={navigation}/>
    }
      />
    </View>
  );
};

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#E5E5E5"
  }
});