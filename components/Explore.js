
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";

const Explore = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://links.papareact.com/pyp")
        .then((response) => response.json())
        .then((data) =>{ 
            console.log(data);
            setPlaces(data.places);
        })
        .catch(error => console.error(error));
    };
    fetchData();
  }, []);

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>Explore More</Text>
      {places.length === 0 ? (
        <Text>Cargando Lugares ....</Text>
      ):(

      <FlatList
      numColumns={2}
        data={places}
        renderItem={({ item }) => (
          <View style={{flexDirection:"row",margin:7}}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: item.img }}
            />
            <View style={{paddingLeft:10,backgroundColor:"#72A0C1",paddingTop:5,width:120}}>
              <Text style={{color:"white"}}>{item.location}</Text>
              <Text>{item.distance}</Text>
            </View>
          </View>
        )}
        KeyExtractor={(item) => item.location + item.distance}
      />
    )}
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});