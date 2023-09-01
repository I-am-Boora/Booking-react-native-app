import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSelector } from "react-redux";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

function ModalTester() {
  const bookings = useSelector((state) => state.booking.booking);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking",
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
      {bookings.map((book, id) => {
        return (
          <Pressable
            onPress={() =>
              navigation.navigate("QrCode", {
                booking: book,
              })
            }
            style={{
              backgroundColor: "#e9edf3",
              margin: 10,
              paddingVertical: 10,
              elevation: 3,
              alignItems: "center",
              borderRadius: 15,
            }}
            key={id}
          >
            <View
              style={{
                flexDirection: "row",
                // justifyContent: "center",
                paddingHorizontal: 10,
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Image
                source={require("../assets/hotel.png")}
                style={{ width: 22, height: 22, marginRight: 10 }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    marginBottom: 5,
                  }}
                >
                  {book.name}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  // fontSize: 16,
                  fontWeight: 600,
                  color: "grey",
                  paddingLeft: 10,
                }}
              >
                Status
              </Text>
              <View
                style={{
                  backgroundColor: "#e8f5e9",
                  paddingHorizontal: 10,
                  paddingVertical: 3,
                  borderRadius: 15,
                }}
              >
                <Text style={{ color: "#66bb6a", fontWeight: "bold" }}>
                  Booked
                </Text>
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

export default ModalTester;

const styles = StyleSheet.create({});
