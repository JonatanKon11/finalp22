import { Pressable, ScrollView, StyleSheet, Text, TextInput, View,SafeAreaView, Button, Image, Alert } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import DatePicker from 'react-native-date-ranges';
import Header from '../components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BottomModal, ModalButton, ModalContent, ModalFooter, SlideAnimation, ModalTitle } from 'react-native-modals';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [selectedDates,setSelectedDates] = useState();
  const route = useRoute()
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible,setModalVisible]= useState(false);
 
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
  },[]);

  const customButton = (onConfirm) => {
  return(
    <Button
    onPress={onConfirm}
    style={{
      container: {width:"80%", marginHorizontal: "3%"},
      text: { fontSize: 20},
    }}
    primary
    title="Submit"
    />

    );
  };

  console.log(route.params)

  const searchPlaces = (place) => {
    if(!route.params || !selectedDates){
      Alert.alert(
        "Invalide Details",
        "Please enter all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        {cancelable: false}
      )
    }

    if(route.params && selectedDates){
      navigation.navigate("Places",{
        rooms:rooms,
        adults:adults,
        children:children,
        selectedDates:selectedDates,
        place:place,
      })
    }
  };
  return (
    <>
    <SafeAreaView>
      <ScrollView>
        <View style={{margin:20, borderColor:"black", borderWidth:1, borderRadius:5}}>


          {/*Destination */}
          <Pressable
           onPress={() => navigation.navigate("Search2")}
            style={{
              flexDirection:"row",
              alignItems:"center",
              gap:10,
              paddingHorizontal:10,
              borderColor:"black",
              borderWidth:2,
              paddingVertical:15, 
              }}
          >
          <AntDesign name="search1" size={24} color="black" />
          <TextInput 
          placeholderTextColor="black" 
          placeholder={
             route?.params ? route.params.input : "Enter Your Destination"
          } 
          />
          </Pressable>
           {/* selected dates */}
          <Pressable style={{flexDirection:"row",alignItems:"center",gap:10,paddingHorizontal:10,borderColor:"black",borderWidth:2,paddingVertical:15,  }}>
          <Entypo name="calendar" size={24} color="black" />
          <DatePicker
            style={ { width: 350, height: 30, borderRadius:0, borderWidth:0, borderColor:"transparent" } }
            customStyles = { {
              placeholderText:{ fontSize:15,flexDirection:"row",alignItems:"center",marginRight:"auto" }, // placeHolder style
              headerStyle:{
                backgroundColor:"#FF5A5F",
              },
              contentText:{
                fontSize:15,flexDirection:"row",alignItems:"center",marginRight:"auto"
              }
          } } // optional 
            selectedBgColor="#FF5A5F"
            customButton={(onConfirm) => customButton(onConfirm)}
            onConfirm={(startDate,endDates) => setSelectedDates(startDate,endDates)}
            allowFontScaling = {false} // optional
            placeholder={"Select Your Dates"}
            mode={'range'}
            />
          </Pressable>
          {/* rooms and guest */}
          <Pressable 
          onPress={() => setModalVisible(!modalVisible)}
          style={{flexDirection:"row",alignItems:"center",gap:10,paddingHorizontal:10,borderColor:"black",borderWidth:2,paddingVertical:15,  }}>
          <Ionicons name="person-outline" size={24} color="black" />
          <TextInput  placeholderTextColor="red" placeholder="1 room - 2 adults - 0 children"/>
          </Pressable>
          {/*search buttom */}
          <Pressable 
          onPress ={() => searchPlaces(route?.params.input)}
          style={{paddingHorizontal:10,borderColor:"black",borderWidth:2,paddingVertical:15,backgroundColor:"#fd5c63"}}>
              <Text style={{color:"white", textAlign:"center", fontSize:15, fontWeight:"500"}}>Search</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>

    <Pressable
    style={{
      marginTop:200,
      justifyContent:"center",
      alignItems:"center",
    }}
    >
      <Image
        style={{width: 200, height:62, resizeMode:"cover" }}
        source={{
          uri: "https://www.edigitalagency.com.au/wp-content/uploads/airbnb-logo-png-transparent-background-1200x375.png",
        }}
      />
    </Pressable>

    <BottomModal 
    swipeThreshold={200} 
    onBackdropPress={() => setModalVisible(!modalVisible)}
    swipeDirection={["up","down"]}
    footer={<ModalFooter>
      <ModalButton text='Apply' 
      style={{ marginBottom:20,color:"white",backgroundColor:"#FF5A5F"}}
      onPress={() => setModalVisible(!modalVisible)}
      />
    </ModalFooter>
    }
    modalTitle={<ModalTitle title="Select rooms and guests" />}
    modalAnimation={new SlideAnimation({
      slideFrom:"bottom",
    })
  }
  onHardwareBackPress={() => setModalVisible(!modalVisible)}
  visible={modalVisible}
  onTouchOutside={() => setModalVisible(!modalVisible)}
 >
  <ModalContent style={{width:"100%",height:310}}>
    <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {rooms}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setRooms((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setAdults(Math.max(1, adults - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {adults}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setAdults((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {children}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

  </ModalContent>
 </BottomModal>
</>
  );
};

export default SearchScreen

const styles = StyleSheet.create({})