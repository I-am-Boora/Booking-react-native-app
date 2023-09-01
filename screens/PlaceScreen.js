import { View, Text, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import PropertyCard from "../component/PropertyCard";
import { ScrollView } from "react-native-gesture-handler";
import { data } from "../Booking_Data/data";

const PlaceScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const searchResult = data.filter(
    (item) => item?.place === route?.params?.place
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerBackTitleStyle: { color: "white" },
      headerTitleAlign: "center",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#264c86",
        height: 120,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      },
    });
  }, [navigation]);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",

          padding: 5,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            padding: 10,
            backgroundColor: "#e9edf3",
            borderRadius: 15,
            alignItems: "center",
          }}
        >
          <MaterialIcons name="sort" size={24} color="#424242" />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              paddingHorizontal: 10,
              color: "#424242",
            }}
          >
            Sort
          </Text>
        </Pressable>
        <Pressable
          style={{
            flexDirection: "row",
            padding: 10,
            backgroundColor: "#e9edf3",
            borderRadius: 15,
            alignItems: "center",
          }}
        >
          <MaterialIcons name="filter-alt" size={24} color="#424242" />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              paddingHorizontal: 10,
              color: "#424242",
            }}
          >
            Filter
          </Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate("Map", {
              searchResult: searchResult,
            })
          }
          style={{
            flexDirection: "row",
            padding: 10,
            backgroundColor: "#e9edf3",
            borderRadius: 15,
            alignItems: "center",
          }}
        >
          <FontAwesome name="map-marker" size={24} color="#424242" />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              paddingHorizontal: 10,
              color: "#424242",
            }}
          >
            Map
          </Text>
        </Pressable>
      </View>
      <ScrollView>
        {data
          ?.filter((item) => item?.place === route?.params?.place)
          .map((item) =>
            item.properties.map((property, index) => (
              <PropertyCard
                key={index}
                property={property}
                adults={route?.params?.adults}
                room={route?.params?.room}
                children={route?.params?.children}
                availaibleRooms={property.rooms}
                selectedDate={route?.params?.selectedDate}
              />
            ))
          )}
      </ScrollView>
    </View>
  );
};

export default PlaceScreen;
