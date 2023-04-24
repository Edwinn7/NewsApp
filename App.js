import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import SportScreen from "./screens/SportScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from "./screens/SearchScreen";
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "red"
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: () => <Ionicons name="home-outline" size={24} color="black" />
        }} />
        <Tab.Screen name="Sport" component={SportScreen} options={{
          tabBarIcon: () => <Ionicons name="football-outline" size={24} color="black" />
        }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarIcon: () => <Ionicons name="search-outline" size={24} color="black" />
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
