import { StyleSheet, Text, View,SafeAreaView, Pressable } from 'react-native'
import React from 'react'

import Ionicons from '@expo/vector-icons/Ionicons';

const ProfilesScreen = () => {
  return (
    <SafeAreaView>
      <View style={{padding:10,margin:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between",}}>
      <Text style={{fontSize:32}}>Perfil</Text>
      <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      <Pressable>
      <Text style={{fontSize:32}}>Configuracion</Text>
      </Pressable>

      <Pressable>
      <Text style={{fontSize:32}}>Ser anfritrion</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default ProfilesScreen

const styles = StyleSheet.create({})