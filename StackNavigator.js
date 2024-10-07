import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FavoritesScreen from './Screens/FavoritesScreen';
import TripsScreen from './Screens/TripsScreen';
import MessagesScreen from './Screens/MessagesScreen';
import ProfilesScreen from './Screens/ProfilesScreen';
import ExploreScreen from './Screens/ExploreScreen';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import SearchScreen from './Screens/SearchScreen';




const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function BottomTabs(){
  return (
    <Tab.Navigator>
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarLabel:"Explore",
                    headerShown:false,
                    tabBarIcon:({focused}) => 
                        focused ? (
                            <AntDesign name="search1" size={24} color="black" />
                        ):(
                            <AntDesign name="search1" size={24} color="black" />
                        ),
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    tabBarLabel:"Favorites",
                    headerShown:false,
                    tabBarIcon:({focused}) => 
                        focused ? (
                            <MaterialIcons name="favorite-outline" size={24} color="black" />
                        ):(   
                            <MaterialIcons name="favorite-outline" size={24} color="black" />
                        ),
                }}
            />
            <Tab.Screen
                name="Trips"
                component={TripsScreen}
                options={{
                    tabBarLabel:"Trips",
                    headerShown:false,
                    tabBarIcon:({focused}) => 
                        focused ? (
                            <FontAwesome6 name="airbnb" size={24} color="black" />
                            
                        ):(   
                            <FontAwesome6 name="airbnb" size={24} color="black" />
                            
                        ),
                }}
            />
            <Tab.Screen
                name="Messages"
                component={MessagesScreen}
                options={{
                    tabBarLabel:"Messages",
                    headerShown:false,
                    tabBarIcon:({focused}) => 
                        focused ? (
                            <FontAwesome6 name="message" size={24} color="black" />
                            
                        ):(   
                            <FontAwesome6 name="message" size={24} color="black" />
                            
                        ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfilesScreen}
                options={{
                    tabBarLabel:"Profile",
                    headerShown:false,
                    tabBarIcon:({focused}) => 
                        focused ? (
                            <AntDesign name="user" size={24} color="black" />
                            
                        ):(   
                            <AntDesign name="user" size={24} color="black" />
                            
                        ),
                }}
            />
    </Tab.Navigator>
   
  );
 }
 return(
    <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
           <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
 );
};

export default StackNavigator

const styles = StyleSheet.create({})