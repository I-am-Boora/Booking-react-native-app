import { View, Text, Image, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { services } from "../Booking_Data/data";
import { MaterialIcons } from "@expo/vector-icons";
import Facilities from "../component/Facilities";

const PropertyInfoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
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

  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = Math.abs((difference / route.params.oldPrice) * 100);
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView>
        <Pressable
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            alignContent: "center",
            marginTop: 10,
          }}
        >
          {route?.params?.property?.photos.slice(0, 5).map((photo) => (
            <View key={photo.id} style={{ borderRadius: 15 }}>
              <Image
                source={{ uri: photo.image }}
                style={{ width: 120, height: 120, borderRadius: 15 }}
              />
            </View>
          ))}
          <Pressable
            style={{
              width: 120,
              alignContent: "center",
              justifyContent: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: 15,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 18, color: "grey" }}>
              See More
            </Text>
          </Pressable>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 5,
              }}
            >
              {route?.params?.name.length > 30
                ? route?.params?.name.slice(0, 20) + "..."
                : route?.params?.name}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row", paddingRight: 10 }}>
                <MaterialIcons
                  name="stars"
                  size={18}
                  color="green"
                  style={{ paddingRight: 5 }}
                />
                <Text>{route?.params?.rating}</Text>
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
          </View>
          <View
            style={{
              backgroundColor: "green",
              paddingHorizontal: 10,
              paddingVertical: 3,
              borderRadius: 15,
            }}
          >
            <Text style={{ color: "white" }}>Travel sustainable</Text>
          </View>
        </View>
        <View
          style={{
            width: "90%",
            height: 3,
            backgroundColor: "#f5f5f5",
            alignSelf: "center",
            borderRadius: 2,
            marginTop: 10,
          }}
        ></View>
        <Text style={{ fontWeight: "600", paddingLeft: 10, marginTop: 5 }}>
          Price for 1 Night and {route?.params?.adults} adults
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
            {route?.params?.property.oldPrice * route?.params?.adults}
          </Text>
          <Text style={{ fontWeight: "600" }}>
            Rs. {route?.params?.property.newPrice * route?.params?.adults}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "green",
            marginHorizontal: 10,
            paddingVertical: 3,
            borderRadius: 5,
            width: 60,
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            {offerPrice.toFixed(0)}% Off
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            height: 3,
            backgroundColor: "#f5f5f5",
            alignSelf: "center",
            borderRadius: 2,
            marginTop: 10,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <View style={{ paddingLeft: 10, paddingRight: 40 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Check in</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#264c86" }}>
              {route.params.selectedDate.startDate}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Check out</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "#264c86" }}>
              {route.params.selectedDate.endDate}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: "grey",
            paddingLeft: 10,
            // textAlign: "center",
            marginTop: 20,
            fontWeight: "600",
          }}
        >
          Rooms and Guests
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#264c86",
            fontWeight: "600",
            paddingLeft: 10,
          }}
        >
          {route.params.room} rooms {route.params.adults} adults{" "}
          {route?.params?.children} children
        </Text>
        <View
          style={{
            width: "90%",
            height: 3,
            backgroundColor: "#f5f5f5",
            alignSelf: "center",
            borderRadius: 2,
            marginTop: 10,
          }}
        ></View>
        <Facilities />
      </ScrollView>
      <Pressable
        onPress={() =>
          navigation.navigate("Rooms", {
            name: route.params.property.name,
            newPrice: route.params.property.newPrice,
            oldPrice: route.params.property.oldPrice,
            rating: route.params.property.rating,
            adults: route.params.adults,
            children: route.params.children,
            room: route.params.room,
            availaibleRooms: route.params.availaibleRooms,
            selectedDate: route.params.selectedDate,
          })
        }
        style={{
          backgroundColor: "#264c86",
          height: 50,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#f2f2f2", fontSize: 20, textAlign: "center" }}>
          Select Availaiblity
        </Text>
      </Pressable>
    </View>
  );
};

export default PropertyInfoScreen;
