import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Ionicons'
import Icon4 from 'react-native-vector-icons/AntDesign'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/state/store';

import HomeScreen from './src/screens/Home';
import CartScreen from './src/screens/Cart'
import DetailScreen from './src/screens/Detail';
import ProfileScreen from './src/screens/Profile';
import CategoriesScreen from './src/screens/Categories';
import CheckoutScreen from './src/screens/CheckoutScreen';
import { MyTabParamList, RootStackParamList } from './src/helpers/types';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MyTabParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

function MyTabs() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        position: 'absolute',
        bottom: 20,
        left: 25,
        right: 25,
        backgroundColor: 'white',
        elevation: 8,
        height: 80,
        borderRadius: 80,
        overflow: 'visible'
      }
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, tabBarIcon: ({ focused }) => <Icon name="home" color={focused ? "#FF844C" : "#DADCE0"} size={25} />, tabBarShowLabel: false }} />
      <Tab.Screen name="Categories" component={CategoriesScreen} options={{ headerShown: false, tabBarIcon: ({ focused }) => <Icon2 name="th-large" color={focused ? "#FF844C" : "#DADCE0"} size={25} />, tabBarShowLabel: false }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{ headerShown: false, tabBarIcon: ({ focused }) => <Icon4 name="shoppingcart" color={focused ? "#FF844C" : "#DADCE0"} size={25} />, tabBarShowLabel: false, tabBarButton: (props) => <TouchableOpacity {...props} onPress={() => navigation.navigate('CartScreen')} /> }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, tabBarIcon: ({ focused }) => <Icon3 name={focused ? "person" : "person-outline"} color={focused ? "#FF844C" : "#DADCE0"} size={25} />, tabBarShowLabel: false }} />
    </Tab.Navigator>
  );
}



export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
              <HomeStack />
            </SafeAreaView>
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
