import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import RenderCategories from '../components/RenderCategories';
import categories from '../asstes/dummyData/categories';
import { MyTabParamList, RootStackParamList } from '../helpers/types';
import { StackScreenProps } from '@react-navigation/stack';

type CategoriesProps = StackScreenProps<MyTabParamList, 'Categories'>

const Categories = ({ navigation }: CategoriesProps) => {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.container}>

      <FlatList
        contentContainerStyle={{ paddingBottom: tabBarHeight + 20 }}
        showsVerticalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) =>
          <RenderCategories key={item.category} category={item.category} categories={item.items} navigation={navigation} />
        }
      />
    </View>
  );
};

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5"
  }
});