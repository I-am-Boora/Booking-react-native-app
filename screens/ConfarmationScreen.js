import { View, Text, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { savedPlaces } from "../SavedRedux";
import { useDispatch } from "react-redux";

const ConfarmationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route.params);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Confarmation",
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
  const dispatch = useDispatch();
  const confirmBooking = (route) => {
    dispatch(savedPlaces(route));
    navigation.replace("Main");
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#e9edf3",
          margin: 10,
          paddingVertical: 10,
          elevation: 3,
          borderRadius: 15,
        }}
      >
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
            flexDirection: "row",
            //   justifyContent: "space-around",
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
        <Pressable
          onPress={() => {
            confirmBooking(route.params);
          }}
          style={{
            backgroundColor: "#264c86",
            alignItems: "center",
            justifyContent: "center",
            height: 48,
            width: 100,
            marginLeft: 10,
            marginTop: 10,
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#f5f5f5", fontWeight: "600" }}>Book Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ConfarmationScreen;
