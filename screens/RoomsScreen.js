import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Facilities from "../component/Facilities";
import { AntDesign } from "@expo/vector-icons";

const RoomsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selected, setSelected] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: " Available Rooms",
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
    <>
      <ScrollView
        contentContainerStylestyle={{
          backgroundColor: "white",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        {route.params.availaibleRooms.map((room) => (
          <View
            style={{
              marginTop: 10,
              backgroundColor: "#e9edf3",
              marginVertical: 5,
              marginHorizontal: 10,
              borderRadius: 15,
              elevation: 3,
              paddingVertical: 10,
            }}
            key={room.id}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "600", color: "#264c86" }}
              >
                {room.name}
              </Text>
              <Feather name="info" size={24} color="#264c86" />
            </View>
            <Text
              style={{ paddingHorizontal: 10, fontSize: 15, color: "grey" }}
            >
              {room.payment}
            </Text>
            <Text
              style={{ paddingHorizontal: 10, fontSize: 15, color: "green" }}
            >
              Free cancellation Available
            </Text>
            <View style={{ flexDirection: "row", paddingLeft: 10 }}>
              <Text
                style={{
                  paddingRight: 10,
                  color: "red",
                  textDecorationLine: "line-through",
                  fontWeight: "600",
                }}
              >
                {route?.params?.oldPrice * route?.params?.adults}
              </Text>
              <Text style={{ fontWeight: "600" }}>
                Rs. {route?.params?.newPrice * route?.params?.adults}
              </Text>
            </View>
            <Facilities />
            {selected.includes(room.name) ? (
              <Pressable
                onPress={() => setSelected(room.name)}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 2,
                  marginTop: 10,
                  marginHorizontal: 10,
                  borderRadius: 10,
                  height: 42,
                  flexDirection: "row",
                  // width: "100%",
                  borderColor: "#264c86",
                }}
              >
                <Text
                  style={{ fontSize: 20, color: "#264c86", fontWeight: "bold" }}
                >
                  Selected
                </Text>
                <AntDesign
                  onPress={() => setSelected([])}
                  name="closecircle"
                  size={24}
                  color="red"
                  style={{ right: 10, flex: 1, position: "absolute" }}
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(room.name)}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 2,
                  marginTop: 10,
                  marginHorizontal: 10,
                  borderRadius: 10,
                  height: 42,
                  borderColor: "#264c86",
                }}
              >
                <Text
                  style={{ fontSize: 20, color: "#264c86", fontWeight: "bold" }}
                >
                  Select
                </Text>
              </Pressable>
            )}
          </View>
        ))}
        <StatusBar style="light" />
      </ScrollView>
      {selected.length > 0 && (
        <Pressable
          onPress={() =>
            navigation.navigate("User", {
              name: route.params.name,
              newPrice: route.params.newPrice,
              oldPrice: route.params.oldPrice,
              rating: route.params.rating,
              adults: route.params.adults,
              children: route.params.children,
              room: route.params.room,
              availaibleRooms: route.params.availaibleRooms,
              selectedDate: route.params.selectedDate,
            })
          }
          style={{
            backgroundColor: "#264c86",
            height: 44,
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
            width: 200,
            borderRadius: 15,
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "#f5f5f5", fontSize: 20 }}>Reserve</Text>
        </Pressable>
      )}
    </>
  );
};

export default RoomsScreen;
