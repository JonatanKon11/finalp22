import { Pressable, ScrollView, StyleSheet, Text, TextInput, View,SafeAreaView, Button } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import DatePicker from 'react-native-date-ranges';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BottomModal, ModalButton, ModalContent, ModalFooter, SlideAnimation, ModalTitle } from 'react-native-modals';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [selectedDates,setSelectedDates] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible,setModalVisible]= useState(false);
  console.log(selectedDates)
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
  return (
    <>
    <SafeAreaView>
      <ScrollView>
        <View style={{margin:20, borderColor:"black", borderWidth:1, borderRadius:5}}>
          {/*Destination */}
          <Pressable style={{flexDirection:"row",alignItems:"center",gap:10,paddingHorizontal:10,borderColor:"black",borderWidth:2,paddingVertical:15, }}>
          <AntDesign name="search1" size={24} color="black" />
          <TextInput placeholderTextColor="black" placeholder='Enter your Destination'/>
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
            selectedBgColor="0047AB"
            customButton={(onConfirm) => customButton(onConfirm)}
            onConfirm={(startDate,endDates) => setSelectedDates(startDate,endDates)}
            allowFontScaling = {false} // optional
            placeholder={'Apr 27, 2018 → Jul 10, 2018'}
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
          <Pressable style={{paddingHorizontal:10,borderColor:"black",borderWidth:2,paddingVertical:15,backgroundColor:"#fd5c63"}}>
              <Text style={{color:"white", textAlign:"center", fontSize:15, fontWeight:"500"}}>Search</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>

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