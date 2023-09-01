import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const TitleBar = () => {
  return (
    <ScrollView
      horizontal
      style={{
        // height: 100,
        // width: "100%",
        marginTop: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",

          //   justifyContent: "space-around",
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            backgroundColor: "#e9edf3",
            height: 44,
            borderRadius: 10,
            paddingHorizontal: 15,
            alignItems: "center",
            marginHorizontal: 5,
            marginVertical: 10,
          }}
        >
          <FontAwesome5
            name="bed"
            size={24}
            color="black"
            style={{ paddingRight: 5 }}
          />
          <Text style={{ fontSize: 15, fontWeight: "600" }}>Stays</Text>
        </Pressable>
        <Pressable
          style={{
            flexDirection: "row",
            backgroundColor: "#e9edf3",
            height: 44,
            borderRadius: 10,
            paddingHorizontal: 15,
            alignItems: "center",
            marginHorizontal: 5,
            marginVertical: 10,
          }}
        >
          <MaterialIcons
            name="flight"
            size={24}
            color="black"
            style={{ paddingRight: 5 }}
          />
          <Text style={{ fontSize: 15, fontWeight: "600" }}>Flights</Text>
        </Pressable>
        <Pressable
          style={{
            flexDirection: "row",
            backgroundColor: "#e9edf3",
            height: 44,
            borderRadius: 10,
            paddingHorizontal: 15,
            alignItems: "center",
            marginHorizontal: 5,
            marginVertical: 10,
          }}
        >
          <FontAwesome
            name="car"
            size={24}
            color="black"
            style={{ paddingRight: 5 }}
          />
          <Text style={{ fontSize: 15, fontWeight: "600" }}>Car Rental</Text>
        </Pressable>
        <Pressable
          style={{
            flexDirection: "row",
            backgroundColor: "#e9edf3",
            height: 44,
            borderRadius: 10,
            paddingHorizontal: 15,
            alignItems: "center",
            marginHorizontal: 5,
            marginVertical: 10,
          }}
        >
          <FontAwesome
            name="taxi"
            size={24}
            color="black"
            style={{ paddingRight: 5 }}
          />
          <Text style={{ fontSize: 15, fontWeight: "600" }}>Taxi </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default TitleBar;
