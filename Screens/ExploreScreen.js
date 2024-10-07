import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Explore from '../components/Explore'
import { useNavigation } from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const ExploreScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title:"Airbnb",
            headerTitleStyle:{
                color:"white",
                fontSize:20
            },
            headerStyle:{
                backgroundColor:"#FF5A5F",
                height:90,
                borderBottomColor:"transparent",
                shadowColor:"tramsparent",
            },
            headerRight : () => (
                <Ionicons name="notifications-outline" size={24} color="white" />
            )

        })
    },[])
  return (
    <>
    <View>
        <View style={{ backgroundColor:"#FF5A5F", height:65,
            flexDirection:"row", 
            alignItems:"center",
            justifyContent:"space-around"}}>
         <View 
        
          style={{
            backgroundColor:"white",
            flexDirection:"row",
            alignItems:"center",
            marginTop:15,
            width:250,
            padding:10,
            borderRadius:10,
            marginLeft:"auto",
            marginRight:"auto"}}>
             <MaterialIcons name="search" size={24} color="black" />
              <TextInput
                onPress={() => navigation.navigate("Search")}
               style={{color:"black", fontSize:16}} placeholder='  where you want to go?'/>
         </View>
        </View>
         <Header/>   
        <ScrollView>
    

            
        
        </ScrollView>
    </View>
    </>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({})