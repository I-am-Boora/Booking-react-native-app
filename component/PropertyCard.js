import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const PropertyCard = ({
  property,
  adults,
  children,
  room,
  availaibleRooms,
  selectedDate,
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        onPress={() =>
          navigation.navigate("Info", {
            name: property.name,
            newPrice: property.newPrice,
            oldPrice: property.oldPrice,
            rating: property.rating,
            adults: adults,
            children: children,
            room: room,

            availaibleRooms: property.rooms,
            selectedDate: selectedDate,
            property: property,
          })
        }
        style={{
          flexDirection: "row",
          backgroundColor: "#e9edf3",
          margin: 5,
          borderRadius: 15,
          width: "90%",
          elevation: 2,
        }}
      >
        <View style={{ padding: 10, borderRadius: 15 }}>
          <Image
            source={{ uri: property.image }}
            style={{ width: 100, height: 200, borderRadius: 15 }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              //   paddingHorizontal: 10,
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              {property.name}
            </Text>
            {/* <Feather name="heart" size={20} color="red" /> */}
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", paddingRight: 10 }}>
              <MaterialIcons
                name="stars"
                size={18}
                color="green"
                style={{ paddingRight: 5 }}
              />
              <Text>{property.rating}</Text>
            </View>
            <View
              style={{
                backgroundColor: "#e0e0e0",
                paddingHorizontal: 5,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "#424242" }}>Genius Level</Text>
            </View>
          </View>
          <Text style={{ width: 250, marginVertical: 5 }}>
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>
          <Text style={{ fontWeight: "600" }}>
            Price for 1 Night and {adults} adults
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                paddingRight: 10,
                color: "red",
                textDecorationLine: "line-through",
                fontWeight: "600",
              }}
            >
              {property.oldPrice * adults}
            </Text>
            <Text style={{ fontWeight: "600" }}>
              Rs. {property.newPrice * adults}
            </Text>
          </View>
          <Text style={{ color: "grey" }}>Delux Room</Text>
          <Text style={{ color: "grey" }}>Hotel Room : 1 bed</Text>
          <View
            style={{
              backgroundColor: "#e0e0e0",
              width: 130,
              paddingHorizontal: 5,
              paddingVertical: 3,
              borderRadius: 15,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Text style={{ color: "#424242", fontWeight: "500" }}>
              Limited Time deal
            </Text>
          </View>
          <Feather
            name="heart"
            size={20}
            color="red"
            style={{ position: "absolute", bottom: 5, right: 0 }}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;
