import React from 'react';
import { View, FlatList } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import HomeTopContent from '../components/HomeTopContent';
import RenderHomeSections from '../components/RenderHomeSections';
import helperSvg from '../helpers/helperSvg';
import homeSections from '../asstes/dummyData/homeSections';


const Home = ({ navigation }) => {

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<HomeTopContent />}
      contentContainerStyle={{ paddingBottom: tabBarHeight + 20 }}
      data={homeSections}
      renderItem={({ item }) =>
        <RenderHomeSections key={item.category} category={item.category} items={item.items} navigation={navigation} />
      }
    />
  );
};

export default Home
