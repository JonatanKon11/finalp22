import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable,SafeAreaView } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



const Header = () => {
    return (
        
        <View style = {{
            backgroundColor:"#FF5A5F",
            height:70,
            flexDirection:"row", 
            alignItems:"center",
            justifyContent:"space-around"

        }}>
       

             <Pressable
             style={{
                flexDirection:"row",
                alignItems:"center",
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 25,
                padding: 8,
                }}
            >
          
            <MaterialCommunityIcons name="ticket-outline" size={20} color="white" />
            <Text 
                style={
                    {marginLeft:8,
                    fontWeight:"bold",
                    color:"white"
                    }}
            >
                Iconicos
            </Text>
            </Pressable>
            <Pressable
             style={{
                flexDirection:"row",
                alignItems:"center",
                }}
            >
            <FontAwesome6 name="house-flood-water" size={20} color="white" />

            <Text 
                style={
                    {marginLeft:8,
                    fontWeight:"bold",
                    color:"white"
                    }}
            >
                F. playa
            </Text>
            </Pressable>
            <Pressable
             style={{
                flexDirection:"row",
                alignItems:"center",
                }}
            >
            <MaterialIcons name="house-siding" size={20} color="white" />
            
           
            <Text 
                style={
                    {marginLeft:8,
                    fontWeight:"bold",
                    color:"white"
                    }}
            >
                Cabañas
            </Text>
            </Pressable>
            <Pressable
             style={{
                flexDirection:"row",
                alignItems:"center",
                }}
            >
                <FontAwesome6 name="sailboat" size={20} color="white" />
            <Text 
                style={
                    {marginLeft:8,
                    fontWeight:"bold",
                    color:"white"
                    }}
            >
                barcos
            </Text>
            </Pressable>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({})